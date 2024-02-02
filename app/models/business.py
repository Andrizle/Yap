from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from datetime import datetime

class Business(db.Model):
    __tablename__ = 'businesses'

    if environment == 'production':
       __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(128), nullable = False)
    icon = db.Column(db.String(256), default='https://s3-media0.fl.yelpcdn.com/assets/public/default_biz_avatar_44x44_v2@2x.yji-ae7f90b9345a64b4c0bd.png')
    category = db.Column(db.String)
    price = db.Column(db.String(4), nullable= False)
    #ratings and reviews will come from relationship with reviews
    review_count = db.Column(db.Integer, default=0)
    rating = db.Column(db.Integer, default=0)
    phone = db.Column(db.String(20), nullable=False)
    street_address = db.Column(db.String, nullable = False)
    suite_unit = db.Column(db.String, nullable = True)
    country = db.Column(db.String, nullable = False)
    zip_code = db.Column(db.String, nullable = False)
    city = db.Column(db.String, nullable = False)
    state = db.Column(db.String, nullable = False)
    hours = db.Column(db.JSON)
    #is_open_now boolean will come from comparing current time to open and close hour for day in frontend
    is_open_now = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    owner = db.relationship('User', back_populates='business')

    def to_dict(self):
        return {
            'id': self.id,
            'owner_id': self.owner_id,
            'name': self.name,
            'icon': self.icon,
            'category': self.category,
            'price': self.price,
            'review_count': self.review_count,
            'rating': self.rating,
            'phone': self.phone,
            'street_address': self.street_address,
            'suite_unit': self.suite_unit,
            'country': self.country,
            'zip_code': self.zip_code,
            'city': self.city,
            'state': self.state,
            'hours': self.hours,
            'is_open_now': self.is_open_now,
            'created_at': self.created_at,
            'updated_at': self.updated_at


        }
