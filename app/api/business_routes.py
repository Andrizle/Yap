from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Business, db
from app.forms import BusinessForm

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
    user = current_user.to_dict()

    businesses = Business.query.filter(Business.owner_id == user['id']).all()
    return { 'businesses': [business.to_dict() for business in businesses]}

# Create New Business
@business_routes.route('/new', methods=['POST'])
@login_required
def create_business():
    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = current_user.to_dict()

        business = Business(
            owner_id = user['id'],
            name = form.data["name"],
            icon = form.data["icon"],
            category = form.data["category"],
            price = form.data["price"],
            review_count = form.data["review_count"],
            rating = form.data["rating"],
            phone = form.data["phone"],
            street_address = form.data["street_address"],
            suite_unit = form.data["suite_unit"],
            country = form.data["country"],
            zip_code = form.data["zip_code"],
            city = form.data["city"],
            state = form.data["state"],
            hours = form.data["hours"],
            is_open_now = form.data["is_open_now"]
            )

        db.session.add(business)
        db.session.commit()

        return business.to_dict()
    return form.errors, 400

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
         if user["id"] == business.owner_id:

            business.name = form.data["name"] if "name" in form.data else business.name,
            business.icon = form.data["icon"] if "icon" in form.data else business.icon,
            business.category = form.data["category"] if "category" in form.data else business.category,
            business.price = form.data["price"] if "price" in form.data else business.price,
            business.review_count = form.data["review_count"] if "review_count" in form.data else business.review_count,
            business.rating = form.data["rating"] if "rating" in form.data else business.rating,
            business.phone = form.data["phone"] if "phone" in form.data else business.phone,
            business.street_address = form.data["street_address"] if "street_address" in form.data else business.street_address,
            business.suite_unit = form.data["suite_unit"] if "suite_unit" in form.data else business.suite_unit,
            business.country = form.data["country"] if "country" in form.data else business.country,
            business.zip_code = form.data["zip_code"] if "zip_code" in form.data else business.zip_code,
            business.city = form.data["city"] if "city" in form.data else business.city,
            business.state = form.data["state"] if "state" in form.data else business.state,
            business.hours = form.data["hours"] if "hours" in form.data else business.hours,
            business.is_open_now = form.data["is_open_now"] if "is_open_now" in form.data else business.is_open_now

            db.session.commit()
            return business.to_dict()
         else:
            return {'errors': {'message': 'Unauthorized'}}, 401
    return form.errors, 400

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
        db.session.delete(business)
        db.session.commit()
        return {'message': "Successfully deleted"}
    else:
        return {'errors': {'message': 'Unauthorized'}}, 401
