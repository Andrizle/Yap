from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.models import Business, db

business_routes = Blueprint('businesses', __name__)

@business_routes.route('/')
def businesses():
    businesses = Business.query.all()
    return { 'businesses': [business.to_dict() for business in businesses]}
