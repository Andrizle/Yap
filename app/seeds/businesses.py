from app.models import db, Business, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo business, you can add other businesses here if you want
def seed_businesses():
    #restaurants
    savor = Business(
          name = "Savor Bistro",
          category = "Restaurants",
          price = "$$$",
          phone = "1 (555) 123-4567",
          street_address = "123 Main Street",
          suite_unit = '',
          country = 'United States',
          zip_code = '55123',
          city = "Cityville",
          state = "LA",
          hours = "Mon - Sat: 11:00 AM - 9:00 PM",
          owner_id = 2,
          rating = 0,
          review_count = 0
    )
    demo_biz = Business(
        name = "Crispy Delights",
        category = "Restaurants",
        price = "$",
        phone = "1 (555) 345-6789",
        street_address = "987 Maple Lane",
        suite_unit = "",
        country = "United States",
        zip_code = '40004',
        city = "Hamletville",
        state = "FL",
        hours = "Mon - Fri : 10:00 AM - 7:00 PM",
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
        zip_code = '30003',
        city = "Villagetown",
        state = "TX",
        hours = "Tues - Sun : 12:00 PM - 8:00 PM",
        owner_id = 2,
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
        zip_code = '20002',
        city = "Townsville",
        state = "CA",
        hours = "Wed - Sat : 5:00 PM - 11:00 PM",
        owner_id = 3,
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
        zip_code = '10001',
        city = "Cityville",
        state = "NY",
        hours = "Thurs - Mon : 1:00 PM - 10:00 PM",
        owner_id = 1,
        rating = 0,
        review_count = 0
    )

    db.session.add(demo_biz)
    db.session.add(savor)
    db.session.add(mediterranean)
    db.session.add(green)
    db.session.add(flavors)

    #Automotive
    speed = Business(
        name = "Speedy Wheels Auto Shop",
        category = "Automotive",
        phone = "+1 (555) 111-1111",
        location = "789 Broadway Street, Cityville, State",
        street_address = "789 Broadway Street",
        country = "United States",
        zip_code = 10005,
        city = "Cityville",
        state = "CA",
        owner_id = 3
    )
    elite = Business(
        name = "Elite Auto Services",
        category = "Automotive",
        phone = "+1 (555) 222-2222",
        location = "456 Oak Street, Townsville, State",
        street_address = "456 Oak Street",
        country = "United States",
        zip_code = 20010,
        city = "Townsville",
        state = "TX",
        owner_id = 4
    )
    tire = Business(
        name = "Tire Masters",
        category = "Automotive",
        phone = "+1 (555) 333-3333",
        location = "123 Maple Avenue, Villagetown, State",
        street_address = "123 Maple Avenue",
        country = "United States",
        zip_code = 30015,
        city = "Villagetown",
        state = "NY",
        owner_id = 2
    )
    auto = Business(
        name = "AutoTech Solutions",
        category = "Automotive",
        phone = "+1 (555) 444-4444",
        location = "567 Pine Street, Hamletville, State",
        street_address = "567 Pine Street",
        country = "United States",
        zip_code = 40020,
        city = "Hamletville",
        state = "FL",
        owner_id = 5
    )
    city = Business(
        name = "City Motors",
        category = "Automotive",
        phone = "+1 (555) 555-5555",
        location = "901 Elm Street, Countryside, State",
        street_address = "901 Elm Street",
        country = "United States",
        zip_code = 50025,
        city = "Countryside",
        state = "CA",
        owner_id = 1
    )

    db.session.add(speed)
    db.session.add(elite)
    db.session.add(tire)
    db.session.add(auto)
    db.session.add(city)



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
