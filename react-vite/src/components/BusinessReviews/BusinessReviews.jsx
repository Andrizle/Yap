import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkFetchReviews } from "../../redux/reviews";
import OpenModalButton from "../OpenModalButton";
import DeleteReviewModal from "../DeleteReviewModal/DeleteReviewModal";
import './BusinessReviews.css'

export default function BusinessReviews() {
    const dispatch = useDispatch();
    const { businessId } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const reviews = Object.values(useSelector(state => state.reviews.business))

    function compareNumbers(a, b) {
        return b.id - a.id;
    }

    useEffect(() => {
            dispatch(thunkFetchReviews(businessId))
        }, [dispatch, businessId])

    if (!reviews) return null;

    const month = date => {
        const newDate = Date(date)
        const dateArr = newDate.split(' ')

        return dateArr[1]
    }

    return (
        <div className="reviewsContainer">
            {reviews.sort(compareNumbers).map(review => (
                <div className="reviewDetails" key={review.id}>
                    <h3 className="reviewer">{review.author?.username}</h3>
                    <div className="reviewDate">{month(review.createdAt)} {review.created_at.split(' ')[3]}</div>
                    <div className="reviewText">{review.review}</div>
                    {sessionUser?.id == review.userId ?
                        <OpenModalButton
                            buttonText='Delete'
                            modalComponent={<DeleteReviewModal review={review} />}
                        /> :
                        null
                    }
                </div>
            ))}

        </div>
    )
}
