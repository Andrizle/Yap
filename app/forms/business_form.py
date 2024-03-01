from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helpers import ALLOWED_EXTENSIONS


def price_validation(form, field):
    price = field.data
    choices=['$', '$$', '$$$', '$$$$']

    if price not in choices:
        raise ValidationError("Price can only be in the format of '$' with up to four '$'")

def category_validation(form, field):
    category = field.data
    choices=['Restaurants', 'Shopping', 'Nightlife', 'Active Life', 'Beauty & Spas', 'Automotive', 'Home Services', 'Other']

    if category not in choices:
        raise ValidationError("Category must be one of the choices from the drop-down menu")

class BusinessForm(FlaskForm):
    name = StringField('Business name', validators=[DataRequired(), Length(max=128, message="Length of server name must be less than 128 characters")])
    icon =FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    category = StringField('category', validators=[category_validation])
    price = StringField('price expense', validators=[DataRequired(), price_validation])
    review_count = IntegerField('review count')
    rating = IntegerField('Star rating')
    phone = StringField('phone number', validators=[DataRequired(), Length(max=20, message='Phone number can only be up to 20 characters including spaces')])
    street_address = StringField("Street", validators=[DataRequired()])
    suite_unit = StringField("suite/unit")
    country = StringField("country", validators=[DataRequired()])
    zip_code = StringField('zipcode', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    hours = StringField('hours', validators=[DataRequired()])
