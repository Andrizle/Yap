from flask_wtf import FlaskForm
from wtforms import StringField, URLField, IntegerField
from wtforms.validators import DataRequired, Length, ValidationError
from app.models import Review

def reviewed(form, field):
    author_id = field.data
    review = Review.query.filter(Review.author_id == author_id).first()

    if review:
        raise ValidationError('User already has a review for this business')

def star_validation(form, field):
    stars=field.data

    if (stars not in range(1, 6)):
        raise ValidationError("Must give a star rating between 1 and 5")

class ReviewForm(FlaskForm):
    author_id=IntegerField('Author ID', validators=[reviewed])
    review = StringField('Review', validators=[DataRequired(), Length(min=20, message='Please write a review of at least 20 characters')])
    stars = IntegerField('Stars', validators=[DataRequired(), star_validation])
    image = URLField('Image')
