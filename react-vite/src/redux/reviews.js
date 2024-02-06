import { csrfFetch } from "./csrf"

const LOAD_REVIEWS = 'reviews/getReviews'
const LOAD_MY_REVIEWS = 'reviews/getMyReviews'
const ADD_REVIEW = 'reviews/addReview'
const DELETE_REVIEW = 'reviews/deleteReview'

//action creators
function getReviews(reviews) {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
}

const loadMyReviews = reviews => ({
    type: LOAD_MY_REVIEWS,
    reviews
})

function addReview(review) {
    return {
        type: ADD_REVIEW,
        review
    }
}

function deleteReview(reviewId) {
    return{
        type: DELETE_REVIEW,
        reviewId
    }
}

//thunk action creators
export const thunkFetchReviews = (businessId) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}/reviews`);

    if (response.ok) {
        const reviews = await response.json();

        dispatch(getReviews(reviews));

        return reviews
    }
}

export const thunkFetchMyReviews = () => dispatch => {
    return fetch('/api/reviews/current')
    .then(r => r.json())
    .then(d => dispatch(loadMyReviews(d.reviews)))
    .catch(console.errors)
}

export const thunkPostReview = (review, businessId, sessionUser) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const review = await response.json();

        dispatch(addReview({...review, User: sessionUser}))

        return review
    }

}

export const thunkDeleteReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteReview(review.id))
        return review.id
    }
}

//reviews reducer
const initialState = {
    business:{},
    user: {}
};

const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REVIEWS: {
            const newBusinessReviews = {};

            for (let review of action.reviews.reviews) {
                newBusinessReviews[review.id] = review
            }

            return {...state, business: newBusinessReviews}
        }
        case ADD_REVIEW: {
            const newBusinessState = {...state.business, [action.review.id]: action.review}

            return {...state, business: newBusinessState}
        }
        case DELETE_REVIEW: {
            const newBusinessReviews = {...state.business}
            delete newBusinessReviews[action.reviewId]
            const newState = {...state, business: newBusinessReviews}
            return newState
        }
        default:
            return state
    }
}

export default reviewReducer
