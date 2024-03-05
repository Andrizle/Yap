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
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/savorBistro.jpg'
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
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/crispyDelight.jpg'
    )
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
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/flavorsFusion.jpg'
    )
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
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/greenPlatter.jpg'
    )
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
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/medibreeze.jpg'
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
        price = '$$',
        hours = "Mon - Fri : 10:00 AM - 7:00 PM",
        phone = "+1 (555) 111-1111",
        street_address = "789 Broadway Street",
        country = "United States",
        zip_code = 10005,
        city = "Cityville",
        state = "CA",
        owner_id = 3,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/speedyWheels.jpg'
    )
    elite = Business(
        name = "Elite Auto Services",
        category = "Automotive",
        price = '$$$',
        hours = "Mon - Fri : 9:00 AM - 6:00 PM",
        phone = "+1 (555) 222-2222",
        street_address = "456 Oak Street",
        country = "United States",
        zip_code = 20010,
        city = "Townsville",
        state = "TX",
        owner_id = 4,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/eliteAuto.jpg'
    )
    tire = Business(
        name = "Tire Masters",
        category = "Automotive",
        price = '$$$',
        hours = "Mon - Thurs : 8:00 AM - 5:00 PM",
        phone = "+1 (555) 333-3333",
        street_address = "123 Maple Avenue",
        country = "United States",
        zip_code = 30015,
        city = "Villagetown",
        state = "NY",
        owner_id = 2,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/tireMasters.jpg'
    )
    auto = Business(
        name = "AutoTech Solutions",
        category = "Automotive",
        price = '$$$',
        hours = "Mon - Thurs : 7:00 AM - 4:00 PM",
        phone = "+1 (555) 444-4444",
        street_address = "567 Pine Street",
        country = "United States",
        zip_code = 40020,
        city = "Hamletville",
        state = "FL",
        owner_id = 5,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/autoTech.jpg'
    )
    city = Business(
        name = "City Motors",
        category = "Automotive",
        price = '$$$$',
        hours = "Mon - Sat : 11:00 AM - 8:00 PM",
        phone = "+1 (555) 555-5555",
        street_address = "901 Elm Street",
        country = "United States",
        zip_code = 50025,
        city = "Countryside",
        state = "CA",
        owner_id = 1,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/cityMotors.jpg'
    )

    db.session.add(speed)
    db.session.add(elite)
    db.session.add(tire)
    db.session.add(auto)
    db.session.add(city)

    #Nightlife

    velvet = Business(
        name = "The Velvet Lounge",
        category = "Nightlife",
        price = '$$$$',
        hours = "Sun - Sat : 5:30 PM - 12:30 AM",
        phone = "+1 (555) 123-4567",
        street_address = "123 Main Street",
        country = "United States",
        zip_code = 10001,
        city = "Cityville",
        state = "CA",
        owner_id = 1,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/velvetNights.jpg'
    )
    neon = Business(
        name = "Neon Nights Club",
        category = "Nightlife",
        price = '$$',
        hours = "Fri - Sun : 9:00 PM - 4:00 AM",
        phone = "+1 (555) 987-6543",
        street_address = "456 Broadway Avenue",
        country = "United States",
        zip_code = 20010,
        city = "Townsville",
        state = "TX",
        owner_id = 2,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/neonNights.jpg'
    )
    moonlight = Business(
        name = "Moonlight Bar & Grill",
        category = "Nightlife",
        price = '$$$',
        hours = "Tues - Sun : 11:00 AM - 11:00 PM",
        phone = "+1 (555) 567-8901",
        street_address = "789 Ocean Drive",
        country = "United States",
        zip_code = 30015,
        city = "Beachtown",
        state = "FL",
        owner_id = 3,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/moonlight.jpg'
    )

    db.session.add(velvet)
    db.session.add(neon)
    db.session.add(moonlight)

    #Active Life

    fitZone = Business(
        name = "FitZone Gym",
        category = "Active Life",
        price = '$$$',
        hours = "Sun - Sat : 6:00 AM - 10:00 PM",
        phone = "+1 (555) 123-4567",
        street_address = "789 Fitness Avenue",
        country = "United States",
        zip_code = 10010,
        city = "Cityville",
        state = "CA",
        owner_id = 1,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/fitzone.jpg'
    )
    adventure = Business(
        name = "Adventure Trekking Co.",
        category = "Active Life",
        price = '$$',
        hours = "Mon - Thurs : 11:00 AM - 10:00 PM",
        phone = "+1 (555) 987-6543",
        street_address = "456 Adventure Trail",
        country = "United States",
        zip_code = 20020,
        city = "Townsville",
        state = "TX",
        owner_id = 2,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/adventure.jpg'
    )

    db.session.add(fitZone)
    db.session.add(adventure)

    #Beauty & Spas

    glow = Business(
        name = "Glow Beauty Spa",
        category = "Beauty & Spas",
        price = '$$$$',
        hours = "Sat - Fri : 11:00 AM - 8:00 PM",
        phone = "+1 (555) 111-2222",
        street_address = "789 Radiant Avenue",
        country = "United States",
        zip_code = 10010,
        city = "Cityville",
        state = "CA",
        owner_id = 1,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/glowSpa.jpg'
    )
    tranquil = Business(
        name = "Tranquil Serenity Salon",
        category = "Beauty & Spas",
        price = '$$$',
        hours = "Fri - Wed : 7:30 AM - 8:30 PM",
        phone = "+1 (555) 333-4444",
        street_address = "456 Blissful Street",
        country = "United States",
        zip_code = 20020,
        city = "Townsville",
        state = "TX",
        owner_id = 2,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/tranquil.jpg'
    )

    db.session.add(glow)
    db.session.add(tranquil)

    #Shopping
    fashion = Business(
        name = "Fashion Forward Boutique",
        category = "Shopping",
        price = '$$$',
        hours = "Mon - Fri : 10:00 AM - 7:00 PM",
        phone = "+1 (555) 111-2222",
        street_address = "789 Trendy Street",
        country = "United States",
        zip_code = 10010,
        city = "Cityville",
        state = "CA",
        owner_id = 1,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/fashionForward.jpg'
    )
    tech = Business(
        name = "Tech Haven Electronics",
        category = "Shopping",
        price = '$$$$',
        hours = "Mon - Fri : 9:00 AM - 6:00 PM",
        phone = "+1 (555) 333-4444",
        street_address = "456 Tech Street",
        country = "United States",
        zip_code = 20020,
        city = "Townsville",
        state = "TX",
        owner_id = 2,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/techHaven.jpg'
    )
    greenT = Business(
        name = "Green Thumb Garden Center",
        category = "Shopping",
        price = '$$',
        hours = "Mon - Fri : 9:00 AM - 5:00 PM",
        phone = "+1 (555) 555-6666",
        street_address = "123 Garden Avenue",
        country = "United States",
        zip_code = 30030,
        city = "Greenville",
        state = "FL",
        owner_id = 3,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/greenThumb.jpg'
    )
    bookworm = Business(
        name = "Bookworm Bookstore",
        category = "Shopping",
        price = '$$$$',
        hours = "Mon - Fri : 9:00 AM - 5:00 PM",
        phone = "+1 (555) 777-8888",
        street_address = "789 Literary Lane",
        country = "United States",
        zip_code = 40040,
        city = "Booktown",
        state = "NY",
        owner_id = 4,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/bookworm.jpg'
    )
    home = Business(
        name = "Home Harmony Furniture",
        category = "Shopping",
        price = '$$$',
        hours = "Mon - Fri : 10:00 AM - 8:00 PM",
        phone = "+1 (555) 999-0000",
        street_address = "456 Comfort Street",
        country = "United States",
        zip_code = 50050,
        city = "Homestead",
        state = "CA",
        owner_id = 5,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/homeHarmony.jpg'
    )

    db.session.add(fashion)
    db.session.add(tech)
    db.session.add(greenT)
    db.session.add(bookworm)
    db.session.add(home)

    #Home Services

    handy = Business(
        name = "Handy Home Repairs",
        category = "Home Services",
        price = '$',
        hours = "Mon - Fri : 6:00 AM - 5:00 PM",
        phone = "+1 (555) 111-2222",
        street_address = "789 Fixit Street",
        country = "United States",
        zip_code = 10010,
        city = "Cityville",
        state = "CA",
        owner_id = 1,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/handyHome.jpg'
    )
    sparkle = Business(
        name = "Sparkle Cleaners",
        category = "Home Services",
        price = '$$',
        hours = "Mon - Fri : 7:00 AM - 4:00 PM",
        phone = "+1 (555) 333-4444",
        street_address = "456 Shine Avenue",
        country = "United States",
        zip_code = 20020,
        city = "Townsville",
        state = "TX",
        owner_id = 2,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/sparkleCleaners.jpg'
    )
    land = Business(
        name = "Green Thumb Landscaping",
        category = "Home Services",
        price = '$$$',
        hours = "Mon - Fri : 5:00 AM - 3:00 PM",
        phone = "+1 (555) 555-6666",
        street_address = "123 Garden Avenue",
        country = "United States",
        zip_code = 30030,
        city = "Greenville",
        state = "FL",
        owner_id = 3,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/greenThumbLand.jpg'
    )

    db.session.add(handy)
    db.session.add(sparkle)
    db.session.add(land)

    #Other

    cozy = Business(
        name = "Cozy Corner Cafe",
        category = "Other",
        price = '$$',
        hours = "Sun - Sat : 6:00 AM - 2:00 PM",
        phone = "+1 (555) 111-2222",
        street_address = "789 Brew Avenue",
        country = "United States",
        zip_code = 10010,
        city = "Cityville",
        state = "CA",
        owner_id = 1,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/cozyCafe.jpg'
    )
    paws = Business(
        name = "Paws & Whiskers Pet Store",
        category = "Other",
        price = '$$$',
        hours = "Wed - Sun : 9:00 AM - 5:00 PM",
        phone = "+1 (555) 333-4444",
        street_address = "456 Pet Street",
        country = "United States",
        zip_code = 20020,
        city = "Townsville",
        state = "TX",
        owner_id = 2,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/paws.jpg'
    )
    dream = Business(
        name = "Dream Home Realty",
        category = "Other",
        price = '$$',
        hours = "Mon - Fri : 9:00 AM - 5:00 PM",
        phone = "+1 (555) 555-6666",
        street_address = "123 Dream Avenue",
        country = "United States",
        zip_code = 30030,
        city = "Greenville",
        state = "FL",
        owner_id = 3,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/dreamHome.jpg'
    )
    sunset = Business(
        name = "Sunset View Hotel",
        category = "Other",
        price = '$$',
        hours = "Sun - Sat : 12:00 AM - 12:00 AM",
        phone = "+1 (555) 777-8888",
        street_address = "789 Seaside Drive",
        country = "United States",
        zip_code = 40040,
        city = "Beachtown",
        state = "SC",
        owner_id = 4,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/sunset.jpg'
    )
    healthy = Business(
        name = "Healthy Heart Clinic",
        category = "Other",
        price = '$$$$',
        hours = "Mon - Fri : 8:00 AM - 4:00 PM",
        phone = "+1 (555) 999-0000",
        street_address = "456 Wellness Avenue",
        country = "United States",
        zip_code = 50050,
        city = "Healthville",
        state = "CA",
        owner_id = 5,
        icon = 'https://andrizlebuckets.s3.us-west-1.amazonaws.com/healthyHeart.jpg'
    )

    db.session.add(cozy)
    db.session.add(paws)
    db.session.add(dream)
    db.session.add(sunset)
    db.session.add(healthy)

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
