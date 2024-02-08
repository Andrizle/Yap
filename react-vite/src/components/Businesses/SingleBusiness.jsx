import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkFetchBusiness } from "../../redux/business";
import { thunkFetchReviews } from "../../redux/reviews";
import BusinessReviews from "../BusinessReviews"
import OpenModalButton from "../OpenModalButton";
import PostReviewModal from "../PostReviewModal";
import './SingleBusiness.css'

export default function SingleBusiness() {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const business = useSelector(state => state.business.allBusinesses[businessId])
    const reviews = Object.values(useSelector(state => state.reviews.business))

    useEffect(() => {
        dispatch(thunkFetchBusiness(businessId))
        dispatch(thunkFetchReviews(businessId))
    }, [dispatch, businessId])

    if (!business || !reviews) return null;


    return (
        <div className="singleBusinessContainer">
            <div className="imagesContainer">
                <img src={business.icon} alt="" />
            </div>
            <div className="businessDetailsContainer">
                <div className="businessMainContent">
                    <div className="businessNameContainer">
                        <h1 className="businessName">{business.name}</h1>
                    </div>
                    {
                        business.review_count != 0 ?
                        <div className='bizRatingContainer'>
                             <div>
                            {business.rating.toFixed(1)}
                            </div>
                            <div className='bizReviewCountContainer'>
                                ({business.review_count} {business.review_count === 1 ? 'review' : 'reviews'})
                            </div>
                        </div>
                        : null
                    }
                    <div className="businessPriceCategory">
                        <span>{business.price}</span>
                        <span> • </span>
                        <span>{business.category}</span>
                    </div>
                    <div>
                        <span>{business.hours}</span>
                    </div>
                </div>
                <div className="businessAddressPhone">
                    <div>{business.street_address} {business.city}, {business.state} <br /> {business.zip_code}</div>
                    <div>{business.phone}</div>
                </div>
            </div>
            <div className="reviewsContainer">
                { reviews.length ?
                    (<>
                        <h2>
                            <i className="fas fa-star"></i>
                            {business.rating.toFixed(1)}
                            <span className="dotDivider"> • </span>
                            <span>({reviews.length}
                            {reviews.length === 1 ?
                                ' Review' :
                                ' Reviews'
                            })</span>
                        </h2>
                        {
                            sessionUser && sessionUser?.id !== business.owner_id ?
                            <OpenModalButton
                                buttonText={<div id="writeReviewButtonTextContainer">
                                                <svg width="24" height="24" className="icon_svg">
                                                    <path d="M17.87 22a.93.93 0 0 1-.46-.12L12 19.08l-5.41 2.84a1 1 0 0 1-1-.08 1 1 0 0 1-.4-1l1-6-4.39-4.26a1 1 0 0 1 .56-1.7L8.4 8l2.7-5.48a1 1 0 0 1 1.8 0L15.6 8l6 .88a1 1 0 0 1 .56 1.7l-4.38 4.27 1 6a1 1 0 0 1-1 1.17l.09-.02ZM12 17c.163.002.323.04.47.11l4.07 2.15-.78-4.54a1 1 0 0 1 .29-.89l3.3-3.21-4.56-.72a1 1 0 0 1-.79-.54l-2-4.14-2 4.14a1 1 0 0 1-.75.54l-4.56.67L8 13.78a1 1 0 0 1 .29.89l-.78 4.54 4.07-2.15A1.12 1.12 0 0 1 12 17Z"></path>
                                                </svg>
                                                <span className="writeReviewButtonText">Post Your Review</span>
                                            </div>}
                                id='writeReviewBtn'
                                modalComponent={<PostReviewModal
                                                business={business}
                                />}
                            /> :
                            null
                        }

                        <BusinessReviews
                            />
                    </>) :
                    (<>
                        <h2>
                            <i className="fas fa-star"></i>
                            <span className="avgRating">New</span>
                        </h2>
                        {
                            sessionUser?.id !== business.owner_id ?
                            <OpenModalButton
                                buttonText={<div id="writeReviewButtonTextContainer">
                                                <svg width="24" height="24" className="icon_svg">
                                                    <path d="M17.87 22a.93.93 0 0 1-.46-.12L12 19.08l-5.41 2.84a1 1 0 0 1-1-.08 1 1 0 0 1-.4-1l1-6-4.39-4.26a1 1 0 0 1 .56-1.7L8.4 8l2.7-5.48a1 1 0 0 1 1.8 0L15.6 8l6 .88a1 1 0 0 1 .56 1.7l-4.38 4.27 1 6a1 1 0 0 1-1 1.17l.09-.02ZM12 17c.163.002.323.04.47.11l4.07 2.15-.78-4.54a1 1 0 0 1 .29-.89l3.3-3.21-4.56-.72a1 1 0 0 1-.79-.54l-2-4.14-2 4.14a1 1 0 0 1-.75.54l-4.56.67L8 13.78a1 1 0 0 1 .29.89l-.78 4.54 4.07-2.15A1.12 1.12 0 0 1 12 17Z"></path>
                                                </svg>
                                                <span className="writeReviewButtonText">Post Your Review</span>
                                            </div>}
                                id='writeReviewBtn'
                                modalComponent={<PostReviewModal
                                                    business={business}
                                                />}
                            /> :
                            null
                        }
                        {
                            sessionUser?.id !== business.owner_id ?
                            <h3>Be the first to post a review!</h3> :
                            null
                        }
                    </>)
                }
            </div>
        </div>
    )
}
