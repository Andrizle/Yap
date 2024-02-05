from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Image, Business, db

image_routes = Blueprint('images', __name__)

#Delete Image by image ID
@image_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_image(id):
    image = Image.query.get(id)
    business = Business.query.get(image.business_id)

    if not image:
        return {'errors': {'message': 'Image Not Fount'}}, 404

    if current_user.id not in [image.author_id, business.owner_id]:
        return {'errors': {'message': 'Unauthorized'}}, 401
    else:
        db.session.delete(image)
        db.session.commit()
        return {'message': 'Successfully deleted'}
