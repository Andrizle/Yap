import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import { thunkPostReview } from '../../redux/reviews';
import { useEffect, useState } from 'react';
import RatingInput from './RatingInput';
import './PostReviewModal.css';

export default function PostReviewModal({business}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const { closeModal } = useModal();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');
    const [allow, setAllow] = useState(true)

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState({})

    useEffect(() => {
        if (review.length < 10 || !stars) {
            setAllow(true)
        } else {setAllow(false)}
    }, [review.length, stars])

    const updateReview = e => setReview(e.target.value)

    const handleSubmit = async e => {
        e.preventDefault();

        const newReview = {
            author_id: sessionUser.id,
            business_id: business.id,
            review,
            stars
        }

        await dispatch(thunkPostReview(newReview, business.id, sessionUser))
        .then(closeModal)
        .catch(async (res) => {
            const data = await res.json();
            if (data?.errors) {
              setErrors(data.errors);
            } else if (data?.message) {
                setMessage(data)
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
                        {errors.review && <p className='errors'>{errors.review}</p> }
                    <button
                        type='submit'
                        className='bigButton modalBtn' id='submitReviewButton'
                        disabled={allow}
                    >Post Review</button>
                </form>
            </div>


        </div>
    )
}
