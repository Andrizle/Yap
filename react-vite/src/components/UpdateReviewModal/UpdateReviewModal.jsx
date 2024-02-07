import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkFetchMyReviews, thunkUpdateReview } from '../../redux/reviews';
import { useEffect, useState } from 'react';
import RatingInput from '../PostReviewModal/RatingInput';
import './UpdateReviewModal.css';

export default function UpdateReviewModal({reviewId, business}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const review = useSelector(state => state.reviews.user[reviewId])
    const { closeModal } = useModal();
    const [reviewText, setReviewText] = useState('');
    const [stars, setStars] = useState('');
    const [allow, setAllow] = useState(true)

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setReviewText(review.review)
        setStars(review.stars)
    }, [review])

    useEffect(() => {
        if (review.length < 10 || !stars) {
            setAllow(true)
        } else {setAllow(false)}
    }, [review.length, stars])

    const updateReview = e => setReviewText(e.target.value)

    const handleSubmit = async e => {
        e.preventDefault();

        const updatedReview = {
            id: review.id,
            author_id: sessionUser.id,
            business_id: business.id,
            review: reviewText,
            stars
        }

        await dispatch(thunkUpdateReview(updatedReview, review.id))
        .then(dispatch(thunkFetchMyReviews()))
        .then(closeModal)
        .catch(async (res) => {
            const data = await res.json();
            if (data?.errors) {
                console.log(data.errors)
              setErrors(data.errors);
            }
          });
    }

    const onChange = (num) => {
        setStars(parseInt(num));
      };

    return (
        <div id='reviewModal'>
            <h1 id='reviewHeader'>{business.name}</h1>
            <div id='reviewModalContent'>
                <form onSubmit={handleSubmit}>
            {errors.author_id && <p className='errors'>{errors.author_id}</p> }
                    <div id='starsContainer'>
                        <RatingInput
                            onChange={onChange}
                            stars={stars}
                            type='update'
                        /> <span>Stars</span>
                    </div>
                        {errors.stars && <p className='errors'>{errors.stars}</p> }
                        <textarea
                            id='reviewModalText'
                            placeholder='Leave your review here...'
                            type="text"
                            value={reviewText}
                            onChange={updateReview}
                        />
                        {errors.review && <p className='errors'>{errors.review}</p> }
                    <button
                        type='submit'
                        className='bigButton modalBtn' id='submitReviewButton'
                        disabled={allow}
                    >Save Changes</button>
                </form>
            </div>
        </div>
    )
}
