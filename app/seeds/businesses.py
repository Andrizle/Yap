from app.models import db, Business, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo business, you can add other businesses here if you want
def seed_businesses():
    demo_biz = Business(
        name = "Crispy Delights",
        category = "Restaurants",
        price = "$",
        phone = "1 (555) 345-6789",
        street_address = "987 Maple Lane",
        suite_unit = "",
        country = "United States",
        zip_code = "40004",
        city = "Hamletville",
        state = "FL",
        hours = "Mon-Fri: 10:00 AM - 7:00 PM",
        is_open_now = True,
        owner_id = 1,
        rating = 0,
        review_count = 0)
    flavors = Business(
        name = "Flavors of Fusion",
        category = "Restaurants",
        price = "$$",
        phone = "1 (555) 234-5678",
        street_address = "789 Pine Street",
        suite_unit = "Suite 102",
        country = "United States",
        zip_code = "30003",
        city = "Villagetown",
        state = "TX",
        hours = "Tue-Sun: 12:00 PM - 8:00 PM",
        is_open_now = False,
        owner_id = 1,
        rating = 0,
        review_count = 0)
    green = Business(
        name = "The Green Platter",
        category = "Restaurants",
        price = "$$$",
        phone = "1 (555) 456-7890",
        street_address = "456 Oak Avenue",
        suite_unit = "",
        country = "United States",
        zip_code = "20002",
        city = "Townsville",
        state = "CA",
        hours = "Wed-Sat: 5:00 PM - 11:00 PM",
        is_open_now = True,
        owner_id = 1,
        rating = 0,
        review_count = 0)
    mediterranean = Business(
        name = "Mediterranean Breeze",
        category = "Restaurants",
        price = "$$$",
        phone = "1 (555) 567-8901",
        street_address = "123 Main Street",
        suite_unit = "Apt 4",
        country = "United States",
        zip_code = "10001",
        city = "Cityville",
        state = "NY",
        hours = "Thu-Mon: 1:00 PM - 10:00 PM",
        is_open_now = False,
        owner_id = 1,
        rating = 0,
        review_count = 0
    )

    db.session.add(demo_biz)
    db.session.add(mediterranean)
    db.session.add(green)
    db.session.add(flavors)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the businesses table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_businesses():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.businesses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM businesses"))

    db.session.commit()
