from flask_wtf import FlaskForm
from wtforms import StringField, URLField, IntegerField
from wtforms.validators import DataRequired, Length, ValidationError


def star_validation(form, field):
    stars=field.data
    choices=[1, 2, 3, 4, 5]

    if (stars not in choices):
        raise ValidationError("Must give a star rating between 1 and 5")

class ReviewForm(FlaskForm):
    review = StringField('Review', validators=[DataRequired(), Length(min=20, message='Please write a review of at least 20 characters')])
    stars = IntegerField('Stars', validators=[DataRequired(), star_validation])
    image = URLField('Image')
