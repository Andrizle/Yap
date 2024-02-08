import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchMyReviews } from '../../redux/reviews'
import { thunkFetchBusinesses } from '../../redux/business'
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem'
import OpenModalButton from '../OpenModalButton'
import DeleteReviewModal from '../DeleteReviewModal/DeleteReviewModal'
import './MyReviews.css'
import UpdateReviewModal from '../UpdateReviewModal/UpdateReviewModal'

export default function MyReviews() {
    const reviews = Object.values(useSelector(state => state.reviews.user))
    const businesses = useSelector(state => state.business.allBusinesses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkFetchMyReviews())
        dispatch(thunkFetchBusinesses())
    }, [dispatch])

    if (!reviews || !businesses) return null;

    return (
        <div className='reviewTilesContainer'>
            {reviews.map(review =>
                <div key={review.id} >
                    <div className='reviewTiles'>
                        <div className='reviewBizNameContainer'><h2>{businesses[review.business_id]?.name}</h2></div>
                        <div className='reviewRatingContainer'>{review.stars}</div>
                        <div className='reviewTextContainer'>{review.review}</div>
                    </div>
                    <div className='myReviewButtonsContainer'>
                            <OpenModalButton
                                className='redBtn'
                                buttonText='Update'
                                modalComponent={<UpdateReviewModal reviewId={review.id} business={businesses[review.business_id]}/>}
                            />
                        <OpenModalMenuItem
                            itemText="Delete"
                            modalComponent={<DeleteReviewModal review={review} />}
                        />
                    </div>
                </div>

            )}
        </div>
    )
}
