import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkPostReview } from '../../redux/reviews';
import { useState } from 'react';
import RatingInput from './RatingInput';
import './PostReviewModal.css';
import { thunkFetchBusinesses } from '../../redux/business';

export default function PostReviewModal({business}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const { closeModal } = useModal();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');
    // const [allow, setAllow] = useState(true)

    const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     if (review.length < 20 || !stars) {
    //         setAllow(true)
    //         setErrors({
    //             review: 'Please write a review of at least 20 characters',


    //     })
    //     } else {setAllow(false); setErrors({})}
    // }, [review.length, stars])

    const updateReview = e => setReview(e.target.value)

    const handleSubmit = async e => {
        e.preventDefault();

        if (review.length < 20 && !stars) {
            return setErrors({
                review: 'Please write a review of at least 20 characters',
                stars: 'Please select a rating for your review'
            })
        } else if (review.length < 20) {
            return setErrors({
                review: 'Please write a review of at least 20 characters'
            })
        } else if (!stars) {
            return setErrors({
                stars: 'Please select a rating for your review'
            })
        }

        const newReview = {
            author_id: sessionUser.id,
            business_id: business.id,
            review,
            stars
        }

        await dispatch(thunkPostReview(newReview, business.id))
        .then(dispatch(thunkFetchBusinesses()))
        .then(closeModal)
        .catch(async (res) => {
            const data = await res.json();
            if (data?.errors) {
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
                        /> <span>Stars</span>
                    </div>
                        {errors.stars && <p className='errors'>{errors.stars}</p> }
                        <textarea
                            id='reviewModalText'
                            placeholder='Leave your review here...'
                            type="text"
                            value={review}
                            onChange={updateReview}
                        />
                        <div> Minimum characters: {review.length}/20</div>
                        {errors.review && <p className='errors'>{errors.review}</p> }
                    <button
                        type='submit'
                        className='bigButton modalBtn' id='submitReviewButton'
                        // disabled={allow}
                    >Post Review</button>
                </form>
            </div>


        </div>
    )
}
