from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, URLField, IntegerField, SelectField
from wtforms.validators import DataRequired, Length, ValidationError

def price_validation(form, field):
    price = field.data
    choices=['$', '$$', '$$$', '$$$$']

    if price not in choices:
        raise ValidationError("Price can only be in the format of '$' with up to four '$'")

def category_validation(form, field):
    category = field.data
    choices=['Restaurants', 'Shopping', 'Nightlife', 'Active Life', 'Beauty & Spas', 'Automotive', 'Home Services', 'Coffee & Tea', 'Other']

    if category not in choices:
        raise ValidationError("Category must be one of the choices from the drop-down menu")

class BusinessForm(FlaskForm):
    name = StringField('Business name', validators=[DataRequired(), Length(max=128, message="Length of server name must be less than 128 characters")])
    icon = URLField("icon", validators=[Length(max=256, message="Length of URL must be less than 256 characters")])
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
    is_open_now = BooleanField('Open now?')
