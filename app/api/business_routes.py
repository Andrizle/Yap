from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.models import Business, db
from app.forms import BusinessForm

business_routes = Blueprint('businesses', __name__)

#Get All Businesses
@business_routes.route('/')
def businesses():
    businesses = Business.query.all()
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
    return form.errors, 401
