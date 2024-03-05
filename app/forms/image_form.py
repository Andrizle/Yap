from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import IntegerField
from wtforms.validators import DataRequired
from app.api.aws_helpers import ALLOWED_EXTENSIONS

class ImageForm(FlaskForm):
    author_id=IntegerField("Author ID", validators=[DataRequired()])
    business_id=IntegerField('Business ID', validators=[DataRequired()])
    image=FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
