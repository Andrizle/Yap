from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():

    #restaurants
    Bistro1 = Review(
         review = "Delicious food and excellent service! The ambiance is charming.",
         stars = 5,
         business_id = 2,
         author_id = 1
    )

    Bistro2 = Review(
        review = "Great place for a special occasion. The staff was attentive and friendly.",
        stars = 4,
        business_id = 2,
        author_id = 3
    )

    Bistro3 = Review(
        review = "Had a wonderful dining experience. The flavors were exquisite.",
        stars = 4,
        business_id = 2,
        author_id = 4
    )

    Bistro4 = Review(
        review = "The presentation of the dishes was impressive, and the taste matched the visuals.",
        stars = 5,
        business_id = 2,
        author_id = 5
    )

    Flavors1 = Review(
        review = "Interesting fusion cuisine. Some hits and misses, but overall a unique dining experience.",
        stars = 3,
        business_id = 5,
        author_id = 1
    )

    Flavors2 = Review(
        review = "Loved the creativity in the menu. Would recommend trying their signature dishes.",
        stars = 4,
        business_id = 5,
        author_id = 3
    )

    Flavors3 = Review(
        review = "The ambiance was a bit lacking, but the food made up for it. Tasty dishes!",
        stars = 4,
        business_id = 5,
        author_id = 4
    )

    Flavors4 = Review(
        review = "Fairly good experience. Some dishes stood out more than others.",
        stars = 3,
        business_id = 5,
        author_id = 5
    )

    Crispy1 = Review(
        author_id = 2,
        review = "Simple and delicious comfort food. Perfect for a quick and satisfying meal.",
        stars = 4,
        business_id = 1
    )

    Crispy2 = Review(
        author_id = 3,
        review = "Affordable and tasty. Loved the crispy texture of their signature dishes.",
        stars = 4,
        business_id = 1
    )

    Crispy3 = Review(
        author_id = 4,
        review = "Quick service and a diverse menu. The flavors were on point!",
        stars = 5,
        business_id = 1
    )

    Crispy4 = Review(
        author_id = 5,
        review = "Decent food at a reasonable price. Good for a casual meal.",
        stars = 3,
        business_id = 1
    )

    Green1 = Review(
        author_id = 1,
        review = "A bit on the expensive side, but the quality of ingredients is evident. Delicious!",
        stars = 4,
        business_id = 4

    )

    Green2 = Review(
        author_id = 2,
        review = "Vegetarian paradise! The dishes were flavorful and satisfying.",
        stars = 5,
        business_id = 4
    )

    Green3 = Review(
        author_id = 4,
        review = "Unique and healthy options. The ambiance adds to the overall experience.",
        stars = 4,
        business_id = 4
    )

    Green4 = Review(
        author_id = 5,
        review = "Not a fan of vegetarian cuisine, but this place surprised me. Tasty and filling.",
        stars = 3,
        business_id = 4
    )

    Med1 = Review(
        review = "Absolutely love the Mediterranean flavors! Each dish is a delight.",
        stars = 5,
        business_id = 3,
        author_id = 5
    )

    Med2 = Review(
        review = "The hummus is divine! A must-try for Mediterranean cuisine enthusiasts.",
        stars = 4,
        business_id = 3,
        author_id = 2
    )

    Med3 = Review(
        review = "Fantastic experience. The ambiance transports you to the Mediterranean.",
        stars = 5,
        business_id = 3,
        author_id = 3
    )

    Med4 = Review(
        review = "Good variety of vegetarian options. The staff is friendly and attentive.",
        stars = 4,
        business_id = 3,
        author_id = 4
    )

    db.session.add(Bistro1)
    db.session.add(Bistro2)
    db.session.add(Bistro3)
    db.session.add(Bistro4)
    db.session.add(Flavors1)
    db.session.add(Flavors2)
    db.session.add(Flavors4)
    db.session.add(Flavors3)
    db.session.add(Med1)
    db.session.add(Med2)
    db.session.add(Med3)
    db.session.add(Med4)
    db.session.add(Green1)
    db.session.add(Green2)
    db.session.add(Green3)
    db.session.add(Green4)
    db.session.add(Crispy1)
    db.session.add(Crispy2)
    db.session.add(Crispy3)
    db.session.add(Crispy4)

    #Automotive
    speed1 = Review(
        review = "Fast and efficient service! Got my car fixed in no time.",
        stars = 5,
        business_id = 6,
        author_id = 1
    )
    speed2 = Review(
        review = "Friendly staff and reasonable prices. Will definitely recommend to others.",
        stars = 4,
        business_id = 6,
        author_id = 2
    )
    speed3 = Review(
        review = "Had my brakes inspected here. The staff was helpful and knowledgeable.",
        stars = 4,
        business_id = 6,
        author_id = 4
    )
    speed4 = Review(
        review = "Quick oil change service. Staff was courteous and professional.",
        stars = 3,
        business_id = 6,
        author_id = 5
    )

    db.session.add(speed1)
    db.session.add(speed2)
    db.session.add(speed3)
    db.session.add(speed4)

    elite1 = Review(
        review = "Outstanding service! They diagnosed and fixed my car issue quickly.",
        stars = 5,
        business_id = 7,
        author_id = 1
    )
    elite2 = Review(
        review = "Impressed with the professionalism of the staff. Will definitely be a returning customer.",
        stars = 4,
        business_id = 7,
        author_id = 2
    )
    elite3 = Review(
        review = "Got my car serviced here. Everything was done efficiently, and the prices were fair.",
        stars = 4,
        business_id = 7,
        author_id = 3
    )
    elite4 = Review(
        review = "Had my tires replaced. The process was smooth, and the staff was helpful.",
        stars = 3,
        business_id = 7,
        author_id = 5
    )

    db.session.add(elite1)
    db.session.add(elite2)
    db.session.add(elite3)
    db.session.add(elite4)

    auto1 = Review (
        review = "Excellent service! They resolved my car's issue efficiently.",
        stars = 5,
        business_id = 8,
        author_id = 1
    )
    auto2 = Review (
        review = "Professional mechanics and fair pricing. Happy with the quality of work.",
        stars = 4,
        business_id = 8,
        author_id = 2
    )
    auto3 = Review (
        review = "Took my car in for maintenance. The staff was courteous and knowledgeable.",
        stars = 4,
        business_id = 8,
        author_id = 3
    )
    auto4 = Review (
        review = "Had my brakes checked here. Quick service and good attention to detail.",
        stars = 3,
        business_id = 8,
        author_id = 4
    )

    db.session.add(auto1)
    db.session.add(auto2)
    db.session.add(auto3)
    db.session.add(auto4)

    city1 = Review(
        review = "Disappointed with the service. My car wasn't ready on time, and the staff seemed overwhelmed.",
        stars = 2,
        business_id = 9,
        author_id = 2
    )
    city2 = Review(
        review = "Average experience overall. The prices were high, and the service was slow.",
        stars = 3,
        business_id = 9,
        author_id = 3
    )
    city3 = Review(
        review = "Not impressed with the quality of work. Had to bring my car back for further repairs.",
        stars = 2,
        business_id = 9,
        author_id = 4
    )
    city4 = Review(
        review = "Had issues with communication. It took several attempts to get updates on my car.",
        stars = 3,
        business_id = 9,
        author_id = 5
    )

    db.session.add(city1)
    db.session.add(city2)
    db.session.add(city3)
    db.session.add(city4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the reviews table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
