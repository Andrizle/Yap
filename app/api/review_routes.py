from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Review, Business, Image, db
from app.forms import ReviewForm, ImageForm

review_routes = Blueprint('reviews', __name__)


#Get all current users reviews
@review_routes.route('/current')
@login_required
def my_reviews():
    reviews = Review.query.filter(Review.author_id == current_user.id).all()
    return { 'reviews': [review.to_dict() for review in reviews]}

#Get all images for a review by review ID
@review_routes.route('/<int:id>/images')
def review_images(id):
    images = Image.query.filter(Image.review_id == id).all()

    if images:
        return {'images': [image.to_dict() for image in images]}
    else:
        return {'errors': {'message': "Review Not Found"}}, 404

#Post an image to a review and business by review ID
@review_routes.route('/<int:id>/images', methods=['POST'])
@login_required
def post_review_image():
    review = Review.query.get(id)
    business = Business.query.get(review.business_id)
    form = ImageForm()

    if not review:
        return { 'errors': { 'message': 'Review Not Found'}}, 404

    if not business:
        return { 'errors': {'message': 'Business Not Found'}}, 404

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_image = Image(
            author_id = current_user.id,
            review_id = review.id,
            business_id = business.id,
            image = form.data['image']
        )

        db.session.add(new_image)
        db.session.commit()

        return new_image.to_dict()
    else:
        return {'errors': form.errors}, 400


#Update a review by review ID
@review_routes.route('/<int:id>', methods=['PUT', 'PATCH'])
@login_required
def create_review(id):
    review = Review.query.get(id)

    if not review:
        return { 'errors': { 'message': 'Review Not Found'}}, 404

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print('==============MADE IT TO THE OTHER SIDE==================')
        if current_user.id == review.author_id:
            review.review = form.review.data
            review.stars = form.stars.data
            # review.image = form.name.image
            db.session.commit()
            return review.to_dict()
        else:
            return {'errors': {'message': 'Unauthorized'}}, 401
    return {'errors': form.errors}, 400

#Delete a review by review ID
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)

    if not review:
        return {'errors': { "message": 'Review Not Found'}}, 404

    if current_user.id == review.author_id:
        db.session.delete(review)
        db.session.commit()
        return {'message': 'Successfully deleted'}
    else:
        return {'errors': {'message': 'Unauthorized'}}, 401
