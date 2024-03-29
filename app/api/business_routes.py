from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Business, Review, Image, db
from app.forms import BusinessForm, ReviewForm, ImageForm
from app.api.aws_helpers import (upload_file_to_s3, get_unique_filename, remove_file_from_s3)

business_routes = Blueprint('businesses', __name__)

#Get All Businesses
@business_routes.route('/')
def businesses():
    businesses = Business.query.all()
    return { 'businesses': [business.to_dict() for business in businesses]}

#Get individual business by id
@business_routes.route('/<int:id>')
def single_business(id):
    business = Business.query.get(id)
    if business:
        return business.to_dict()
    else:
        return { 'errors': {'message': 'Business Not Found'}}, 404


#Get all businesses owned by the currently logged in user
@business_routes.route('/current')
@login_required
def owned_businesses():

    businesses = Business.query.filter(Business.owner_id == current_user.id).all()
    return { 'businesses': [business.to_dict() for business in businesses]}


#Get all reviews for a business by business ID
@business_routes.route('/<int:id>/reviews')
def business_reviews(id):
    business = Business.query.get(id)
    reviews = Review.query.filter(Review.business_id == id).all()

    if not business:
        return {'errors': {'message': 'Business Not found'}}, 404

    if reviews:
        return {'reviews': [review.to_dict() for review in reviews]}
    else:
        return {'reviews': []}

#Get all images for a business by business ID
@business_routes.route('/<int:id>/images')
def business_images(id):
    images = Image.query.filter(Image.business_id == id).all()

    if images:
        return {'images': [image.to_dict() for image in images]}
    else:
        return {'errors': {'message': "Business Not Found"}}, 404

# Create New Business
@business_routes.route('/new', methods=['POST'])
@login_required
def create_business():
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = current_user.to_dict()
        image = form.data['icon']
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if 'url' not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when you tried to upload
        # so you send back that error message (and you printed it above)
            return {'errors': {'message': 'error with upload'}}, 401

        url = upload['url']

        business = Business(
            owner_id = user['id'],
            name = form.data["name"],
            icon = url,
            category = form.data["category"],
            price = form.data["price"],
            review_count = form.data['rating'],
            rating = form.data["rating"],
            phone = form.data["phone"],
            street_address = form.data["street_address"],
            suite_unit = form.data["suite_unit"],
            country = form.data["country"],
            zip_code = form.data["zip_code"],
            city = form.data["city"],
            state = form.data["state"],
            hours = form.data["hours"],
        )

        db.session.add(business)
        db.session.commit()

        return business.to_dict()
    return {'errors': form.errors}, 400

#Get all businesses filtered by category
@business_routes.route('/<cat>')
def cat_businesses(cat):

    if cat in ['Restaurants', 'Shopping', 'Nightlife', 'Active Life', 'Beauty & Spas', 'Automotive', 'Home Services', 'Other']:
        businesses= Business.query.filter(Business.category == cat).all()
        return { 'businesses': [business.to_dict() for business in businesses]}
    else:
        return { 'errors': {'message': 'Category not valid'}}

#Post a review to a business by business ID
@business_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def create_review(id):
    form = ReviewForm()
    business=Business.query.get(id)

    if not business:
        return {'errors': {'message': 'Business Not fount'}}, 404

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
            author_id = current_user.id,
            business_id = business.id,
            review = form.data['review'],
            stars = form.data['stars'],
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict()
    return {'errors': form.errors}, 400

#Post an image to a business by business ID
@business_routes.route('<int:id>/images', methods=['POST'])
@login_required
def create_image(id):
    form = ImageForm()
    business = Business.query.get(id)

    if not business:
        return {'errors': {'message': 'Business Not fount'}}, 404

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_image = Image(
            author_id = current_user.id,
            business_id = business.id,
            image = form.data['image']
        )

        db.session.add(new_image)
        db.session.commit()

        return new_image.to_dict()
    else:
        return {'errors': form.errors}, 400


#Update business by business ID
@business_routes.route('/<int:id>', methods=['PUT', 'PATCH'])
@login_required
def update_business(id):
    business = Business.query.get(id)
    user = current_user.to_dict();

    if not business:
        return { 'errors': {'message': 'Business Not Found'}}, 404

    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        icon = form.data['icon']


        if user["id"] == business.owner_id:
            if icon is not None:
                remove_file_from_s3(business.icon)
                icon.filename = get_unique_filename(icon.filename)
                upload = upload_file_to_s3(icon)
                print(upload)

                if 'url' not in upload:
                # if the dictionary doesn't have a url key
                # it means that there was an error when you tried to upload
                # so you send back that error message (and you printed it above)
                    return {'errors': {'message': 'error with upload'}}, 401

                url = upload['url']
                business.icon = url

            business.name = form.name.data
            business.category = form.category.data
            business.price = form.price.data
            business.review_count = form.review_count.data or 0
            business.rating = form.rating.data or 0
            business.phone = form.phone.data
            business.street_address = form.street_address.data
            business.suite_unit = form.suite_unit.data
            business.country = form.country.data
            business.zip_code = form.zip_code.data
            business.city = form.city.data
            business.state = form.state.data
            business.hours = form.hours.data
            db.session.commit()
            return business.to_dict()
        else:
           return {'errors': {'message': 'Unauthorized'}}, 401
    return {'errors': form.errors}, 400

#Delete a business by business id
@business_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_business(id):
    business = Business.query.get(id)
    user = current_user.to_dict()

    if not business:
        return {'errors': {'message': "Business could not be found"}}, 404
    business_to_delete = business.to_dict()

    if user["id"] == business_to_delete['owner_id']:
        remove_file_from_s3(business.icon)
        db.session.delete(business)
        db.session.commit()
        return {'message': "Successfully deleted"}
    else:
        return {'errors': {'message': 'Unauthorized'}}, 401
