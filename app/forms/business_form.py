from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, URLField, IntegerField
from wtforms.validators import DataRequired, Length

class BusinessForm(FlaskForm):
    name = StringField('Business name', validators=[DataRequired(), Length(max=128, message="Length of server name must be less than 128 characters")])
    icon = URLField("icon", validators=[Length(max=256, message="Length of URL must be less than 256 characters")])
    category = StringField('category', choices=['Restaurant', 'Shopping', 'Nightlife', 'Active Life', 'Beauty & Spas', 'Automotive', 'Home Services', 'Coffee & Tea', 'Other'])
    price = StringField('price expense', choices=['$', '$$', '$$$', '$$$$'], validators=[DataRequired(), Length(max=4, message="Price can only be in the format of '$' with up to four '$'")])
    review_count = IntegerField('review count')
    rating = IntegerField('Star rating')
    phone = IntegerField('phone number', validators=[DataRequired(), Length(max=20, message='Phone number can only be up to 20 characters including spaces')])
    street_address = StringField("Street", validators=[DataRequired()])
    suite_unit = StringField("suite/unit")
    country = StringField("country", validators=[DataRequired()])
    zip_code = IntegerField('zipcode', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    hours = StringField('hours', validators=[DataRequired()])
    is_open_now = BooleanField('Open now?')
