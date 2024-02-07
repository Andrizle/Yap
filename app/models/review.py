from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .business import Business
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == 'production':
       __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    business_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('businesses.id')), nullable=False)
    review=db.Column(db.String, nullable=False)
    stars=db.Column(db.Integer, nullable=False)
    created_at=db.Column(db.DateTime, default=datetime.now)
    updated_at=db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    author = db.relationship('User', back_populates='review')
    business=db.relationship('Business', back_populates='review')
    image=db.relationship('Image', back_populates='review')

    def to_dict(self):
        return{
            'id': self.id,
            'author_id': self.author_id,
            'author': self.author.to_dict(),
            'business_id': self.business_id,
            # 'business': self.business.to_dict(),
            'review': self.review,
            'stars': self.stars,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
