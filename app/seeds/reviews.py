from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():

    #!Restaurants
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

    #!Automotive
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
        business_id = 9,
        author_id = 1
    )
    auto2 = Review (
        review = "Professional mechanics and fair pricing. Happy with the quality of work.",
        stars = 4,
        business_id = 9,
        author_id = 2
    )
    auto3 = Review (
        review = "Took my car in for maintenance. The staff was courteous and knowledgeable.",
        stars = 4,
        business_id = 9,
        author_id = 3
    )
    auto4 = Review (
        review = "Had my brakes checked here. Quick service and good attention to detail.",
        stars = 3,
        business_id = 9,
        author_id = 4
    )

    db.session.add(auto1)
    db.session.add(auto2)
    db.session.add(auto3)
    db.session.add(auto4)

    city1 = Review(
        review = "Disappointed with the service. My car wasn't ready on time, and the staff seemed overwhelmed.",
        stars = 2,
        business_id = 10,
        author_id = 2
    )
    city2 = Review(
        review = "Average experience overall. The prices were high, and the service was slow.",
        stars = 3,
        business_id = 10,
        author_id = 3
    )
    city3 = Review(
        review = "Not impressed with the quality of work. Had to bring my car back for further repairs.",
        stars = 2,
        business_id = 10,
        author_id = 4
    )
    city4 = Review(
        review = "Had issues with communication. It took several attempts to get updates on my car.",
        stars = 3,
        business_id = 10,
        author_id = 5
    )

    db.session.add(city1)
    db.session.add(city2)
    db.session.add(city3)
    db.session.add(city4)

    tire1 = Review (
        review = "Had a great experience here. The staff was knowledgeable and helped me find the perfect tires for my car.",
        stars = 5,
        business_id = 8,
        author_id = 1
    )
    tire2 = Review (
        review = "Disappointed with the service. They didn't have the tires I needed in stock, and the wait time was long.",
        stars = 2,
        business_id = 8,
        author_id = 3
    )
    tire3 = Review (
        review = "Average experience. The prices were reasonable, but the staff seemed disorganized.",
        stars = 3,
        business_id = 8,
        author_id = 4
    )
    tire4 = Review (
        review = "Satisfied with the tire installation. Quick service and decent prices.",
        stars = 4,
        business_id = 8,
        author_id = 5
    )

    db.session.add(tire1)
    db.session.add(tire3)
    db.session.add(tire2)
    db.session.add(tire4)

    #Nightlife

    velvet1 = Review(
        review = "Great atmosphere and excellent cocktails. Perfect spot for a night out with friends.",
        stars = 5,
        business_id = 11,
        author_id = 5
    )
    velvet2 = Review(
        review = "Friendly staff and crazy good vibes. Enjoyed the live music performance.",
        stars = 4,
        business_id = 11,
        author_id = 2
    )
    velvet3 = Review(
        review = "Average experience. The drinks were a bit overpriced for the quality.",
        stars = 3,
        business_id = 11,
        author_id = 3
    )
    velvet4 = Review(
        review = "Disappointed with the service. The wait time for drinks was too long.",
        stars = 2,
        business_id = 11,
        author_id = 4
    )

    db.session.add(velvet1)
    db.session.add(velvet2)
    db.session.add(velvet3)
    db.session.add(velvet4)

    neon1 = Review(
        review = "Amazing club with great music and energetic atmosphere. Had a blast!",
        stars = 5,
        business_id = 12,
        author_id = 1
    )
    neon2 = Review(
        review = "Had a fantastic time dancing the night away. The DJ played awesome tracks!",
        stars = 5,
        business_id = 12,
        author_id = 5
    )
    neon3 = Review(
        review = "Decent club, but the crowd was a bit rowdy. Drinks were reasonably priced.",
        stars = 3,
        business_id = 12,
        author_id = 3
    )
    neon4 = Review(
        review = "Average experience. The club was overcrowded, and the music was too loud.",
        stars = 3,
        business_id = 12,
        author_id = 4
    )

    db.session.add(neon1)
    db.session.add(neon2)
    db.session.add(neon3)
    db.session.add(neon4)

    moonlight1 = Review(
        review = "Lovely bar with a relaxing vibe. Enjoyed the outdoor seating and tasty cocktails.",
        stars = 4,
        business_id = 13,
        author_id = 1
    )
    moonlight2 = Review(
        review = "Great spot for a casual evening. The food was delicious, and the staff was friendly.",
        stars = 4,
        business_id = 13,
        author_id = 2
    )
    moonlight3 = Review(
        review = "Average experience. The service was slow, and the food portions were small for the price.",
        stars = 3,
        business_id = 13,
        author_id = 5
    )
    moonlight4 = Review(
        review = "Disappointed with the quality of food. The menu options were limited.",
        stars = 2,
        business_id = 13,
        author_id = 4
    )

    db.session.add(moonlight1)
    db.session.add(moonlight2)
    db.session.add(moonlight3)
    db.session.add(moonlight4)

    #!Active Life

    fitZone1 = Review(
        review = "Love this gym! Great equipment and friendly staff.",
        stars = 5,
        business_id = 14,
        author_id = 3
    )
    fitZone2 = Review(
        review = "Clean and spacious gym. The classes offered are fantastic.",
        stars = 4,
        business_id = 14,
        author_id = 4
    )
    fitZone3 = Review(
        review = "Decent gym, but could use more variety in equipment.",
        stars = 3,
        business_id = 14,
        author_id = 5
    )
    fitZone4 = Review(
        review = "Not satisfied with the cleanliness of the gym. Equipment maintenance is lacking.",
        stars = 2,
        business_id = 14,
        author_id = 2
    )

    db.session.add(fitZone1)
    db.session.add(fitZone2)
    db.session.add(fitZone3)
    db.session.add(fitZone4)

    adventure1 = Review(
        review = "Had an amazing experience trekking with this company. Highly recommended!",
        stars = 5,
        business_id = 15,
        author_id = 1
    )
    adventure2 = Review(
        review = "Professional guides and breathtaking views. A must-do adventure!",
        stars = 5,
        business_id = 15,
        author_id = 3
    )
    adventure3 = Review(
        review = "Enjoyed the trek, but the organization could be improved.",
        stars = 3,
        business_id = 15,
        author_id = 4
    )
    adventure4 = Review(
        review = "Disappointed with the lack of communication regarding the itinerary.",
        stars = 2,
        business_id = 15,
        author_id = 5
    )

    db.session.add(adventure1)
    db.session.add(adventure2)
    db.session.add(adventure3)
    db.session.add(adventure4)

    #!Beauty & Spas

    glow1 = Review(
        review = "Had a wonderful experience at Glow Beauty Spa! The staff was professional and attentive. Will definitely be returning.",
        stars = 5,
        business_id = 16,
        author_id = 5
    )
    glow2 = Review(
        review = "Amazing service! I got a facial and massage, and I left feeling rejuvenated. Highly recommend Glow Beauty Spa!",
        stars = 5,
        business_id = 16,
        author_id = 2
    )
    glow3 = Review(
        review = "Disappointed with my experience. The atmosphere was nice, but the quality of the service didn't meet my expectations.",
        stars = 2,
        business_id = 16,
        author_id = 3
    )
    glow4 = Review(
        review = "Decent service. The staff was friendly, but the prices were a bit steep for the quality of the treatments.",
        stars = 3,
        business_id = 16,
        author_id = 4
    )

    db.session.add(glow1)
    db.session.add(glow2)
    db.session.add(glow3)
    db.session.add(glow4)

    tranquil1 = Review(
        review = "Tranquil Serenity Salon is my go-to place for haircuts! The stylists are talented, and the atmosphere is relaxing.",
        stars = 5,
        business_id = 17,
        author_id = 5
    )
    tranquil2 = Review(
        review = "Had a great experience getting my nails done here. The salon was clean, and the staff was professional.",
        stars = 4,
        business_id = 17,
        author_id = 4
    )
    tranquil3 = Review(
        review = "Not impressed with the service. The stylist seemed rushed and didn't listen to what I wanted for my hair.",
        stars = 2,
        business_id = 17,
        author_id = 3
    )
    tranquil4 = Review(
        review = "Average experience. The salon was understaffed, and the wait time was longer than expected.",
        stars = 3,
        business_id = 17,
        author_id = 1
    )

    db.session.add(tranquil1)
    db.session.add(tranquil2)
    db.session.add(tranquil3)
    db.session.add(tranquil4)

    #!Shopping

    fashion1 = Review(
        review = "Love the trendy clothing selection at Fashion Forward Boutique! Always find the latest styles here.",
        stars = 5,
        business_id = 18,
        author_id = 5
    )
    fashion2 = Review(
        review = "Great customer service and a wide variety of fashionable items. Will definitely shop here again.",
        stars = 5,
        business_id = 18,
        author_id = 2
    )
    fashion3 = Review(
        review = "Average experience. The prices were a bit high for the quality of the clothing.",
        stars = 3,
        business_id = 18,
        author_id = 3
    )

    db.session.add(fashion1)
    db.session.add(fashion2)
    db.session.add(fashion3)

    tech1 = Review(
        review = "Excellent selection of electronics at Tech Haven Electronics. Helpful staff too!",
        stars = 5,
        business_id = 19,
        author_id = 4
    )
    tech2 = Review(
        review = "Bought a new laptop here and received great assistance from the sales team. Highly recommend!",
        stars = 4,
        business_id = 19,
        author_id = 5
    )
    tech3 = Review(
        review = "Decent store, but the prices were a bit steep compared to other places.",
        stars = 4,
        business_id = 19,
        author_id = 1
    )

    db.session.add(tech1)
    db.session.add(tech2)
    db.session.add(tech3)

    greenT1 = Review(
        review = "Love shopping for plants at Green Thumb Garden Center! Great selection and knowledgeable staff.",
        stars = 5,
        business_id = 20,
        author_id = 1
    )
    greenT2 = Review(
        review = "Beautiful garden center with a wide variety of plants and gardening supplies.",
        stars = 4,
        business_id = 20,
        author_id = 2
    )
    greenT3 = Review(
        review = "Average experience. Some of the plants I bought didn't survive long after planting.",
        stars = 2,
        business_id = 20,
        author_id = 4
    )

    db.session.add(greenT1)
    db.session.add(greenT2)
    db.session.add(greenT3)

    book1 = Review(
        review = "Love spending time browsing through books at Bookworm Bookstore! Cozy atmosphere and friendly staff.",
        stars = 5,
        business_id = 21,
        author_id = 5
    )
    book2 = Review(
        review = "Great selection of books and helpful recommendations from the staff.",
        stars = 4,
        business_id = 21,
        author_id = 1
    )
    book3 = Review(
        review = "Really didn't like the selection here, and the prices are way too high for what is offered.",
        stars = 1,
        business_id = 21,
        author_id = 2
    )

    db.session.add(book1)
    db.session.add(book2)
    db.session.add(book3)

    home1 = Review(
        review = "Love the furniture selection at Home Harmony! Great quality and stylish designs.",
        stars = 5,
        business_id = 22,
        author_id = 3
    )
    home2 = Review(
        review = "Purchased a new sofa here and received excellent customer service. Delivery was prompt too!",
        stars = 4,
        business_id = 22,
        author_id = 4
    )
    home3 = Review(
        review = "Decent furniture store, but some items were overpriced for the quality.",
        stars = 3,
        business_id = 22,
        author_id = 1
    )

    db.session.add(home1)
    db.session.add(home2)
    db.session.add(home3)

    #!Home Services

    handy1 = Review(
        review = "Handy Home Repairs did an excellent job fixing my plumbing issue. Quick and professional service.",
        stars = 5,
        business_id = 23,
        author_id = 4
    )
    handy2 = Review(
        review = "Satisfied with the repair work done on my roof. The team was efficient and courteous.",
        stars = 4,
        business_id = 23,
        author_id = 2
    )

    db.session.add(handy1)
    db.session.add(handy2)

    sparkle1 = Review(
        review = "Sparkle Cleaners did a fantastic job cleaning my house. Everything looks spotless!",
        stars = 5,
        business_id = 24,
        author_id = 3
    )
    sparkle2 = Review(
        review = "Decent cleaning service, but missed a few spots. Overall, satisfied with the results.",
        stars = 3,
        business_id = 24,
        author_id = 4
    )

    db.session.add(sparkle1)
    db.session.add(sparkle2)

    land1 = Review(
        review = "Green Thumb Landscaping transformed my backyard into a beautiful oasis. Highly recommend their services!",
        stars = 5,
        business_id = 25,
        author_id = 5
    )
    land2 = Review(
        review = "Average landscaping service. The design was nice, but execution could have been better.",
        stars = 3,
        business_id = 25,
        author_id = 1
    )

    db.session.add(land1)
    db.session.add(land2)

    #Other

    cozy1 = Review(
        review = "Love the cozy atmosphere and delicious coffee at Cozy Corner Cafe. Perfect spot to relax and unwind.",
        stars = 5,
        business_id = 26,
        author_id = 5
    )
    cozy2 = Review(
        review = "Great place for breakfast! The pastries are amazing, and the staff is friendly.",
        stars = 4,
        business_id = 26,
        author_id = 2
    )
    cozy3 = Review(
        review = "Average experience. The coffee was decent, but nothing special.",
        stars = 3,
        business_id = 26,
        author_id = 3
    )
    cozy4 = Review(
        review = "Disappointed with the service. The wait time for my order was too long.",
        stars = 2,
        business_id = 26,
        author_id = 4
    )


    paws1 = Review(
        review = "Fantastic selection of pet supplies at Paws & Whiskers Pet Store. My furry friend loves it here!",
        stars = 5,
        business_id = 27,
        author_id = 5
    )
    paws2 = Review(
        review = "Great customer service and knowledgeable staff. Always find what I need for my pets.",
        stars = 4,
        business_id = 27,
        author_id = 1
    )
    paws3 = Review(
        review = "Decent pet store, but the prices can be a bit high compared to other places.",
        stars = 3,
        business_id = 27,
        author_id = 3
    )
    paws4 = Review(
        review = "Average experience. The store was a bit disorganized, and some items were out of stock.",
        stars = 3,
        business_id = 27,
        author_id = 4
    )


    dream1 = Review(
        review = "Had a great experience finding my dream home with Dream Home Realty. Professional and helpful agents!",
        stars = 5,
        business_id = 28,
        author_id = 1
    )
    dream2 = Review(
        review = "Smooth process from start to finish. The agents were attentive and understanding of my needs.",
        stars = 4,
        business_id = 28,
        author_id = 2
    )
    dream3 = Review(
        review = "Average experience. The communication could have been better throughout the home buying process.",
        stars = 3,
        business_id = 28,
        author_id = 4
    )
    dream4 = Review(
        review = "Disappointed with the lack of follow-up from the agent after closing the deal.",
        stars = 2,
        business_id = 28,
        author_id = 5
    )


    sunset1 = Review(
        review = "Absolutely stunning views from Sunset View Hotel! Had a wonderful stay here.",
        stars = 5,
        business_id = 29,
        author_id = 3
    )
    sunset2 = Review(
        review = "Great hotel with excellent amenities. The staff was friendly and accommodating.",
        stars = 4,
        business_id = 29,
        author_id = 2
    )
    sunset3 = Review(
        review = "Average experience. The room was comfortable, but the noise from nearby guests was disruptive.",
        stars = 3,
        business_id = 29,
        author_id = 5
    )
    sunset4 = Review(
        review = "Disappointed with the cleanliness of the room. Found hair in the bathroom upon arrival.",
        stars = 2,
        business_id = 29,
        author_id = 1
    )


    healthy1 = Review(
        review = "Received excellent care at Healthy Heart Clinic. The doctors are knowledgeable and compassionate.",
        stars = 5,
        business_id = 30,
        author_id = 1
    )
    healthy2 = Review(
        review = "Great experience with the medical staff. They took the time to explain everything thoroughly.",
        stars = 4,
        business_id = 30,
        author_id = 3
    )
    healthy3 = Review(
        review = "Average experience. The wait time for appointments was longer than expected.",
        stars = 3,
        business_id = 30,
        author_id = 4
    )
    healthy4 = Review(
        review = "Disappointed with the lack of follow-up after my consultation. Had to call multiple times for updates.",
        stars = 2,
        business_id = 30,
        author_id = 2
    )

    db.session.add(cozy1)
    db.session.add(cozy2)
    db.session.add(cozy3)
    db.session.add(cozy4)
    db.session.add(paws1)
    db.session.add(paws2)
    db.session.add(paws3)
    db.session.add(paws4)
    db.session.add(dream1)
    db.session.add(dream2)
    db.session.add(dream3)
    db.session.add(dream4)
    db.session.add(sunset1)
    db.session.add(sunset2)
    db.session.add(sunset3)
    db.session.add(sunset4)
    db.session.add(healthy1)
    db.session.add(healthy2)
    db.session.add(healthy3)
    db.session.add(healthy4)

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
