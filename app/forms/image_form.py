from flask_wtf import FlaskForm
from wtforms import URLField, IntegerField
from wtforms.validators import DataRequired

class ImageForm(FlaskForm):
    author_id=IntegerField("Author ID", validators=[DataRequired()])
    business_id=IntegerField('Business ID', validators=[DataRequired()])
    image=URLField('Image')
