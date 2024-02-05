from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .business import Business
from .review import Review
from datetime import datetime


class Image(db.Model):
    __tablename__ = 'images'

    if environment == 'production':
       __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    business_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('businesses.id')), nullable=False)
    review_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('reviews.id')))
    image=db.Column(db.String, nullable=False)
    created_at=db.Column(db.DateTime, default=datetime.now)
    updated_at=db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    author = db.relationship('User', back_populates='images')
    business=db.relationship('Business', back_populates='images')
    review=db.relationship('Review', back_populates='images')

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'business_id': self.business_id,
            'review_id': self.review_id,
            'image': self.image,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
