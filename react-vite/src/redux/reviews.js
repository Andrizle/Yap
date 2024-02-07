import { csrfFetch } from "./csrf"

const LOAD_REVIEWS = 'reviews/getReviews'
const LOAD_MY_REVIEWS = 'reviews/getMyReviews'
const RECEIVE_REVIEW = 'reviews/receiveReview'
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

function receiveReview(review) {
    return {
        type: RECEIVE_REVIEW,
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

export const thunkPostReview = (review, businessId) => async dispatch => {
    const response = await csrfFetch(`/api/businesses/${businessId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const review = await response.json();

        dispatch(receiveReview(review))

        return review
    }

}

export const thunkUpdateReview = (review, reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })

    if (response.ok) {
        console.log('The response was ok')
        const review = await response.json();

        dispatch(receiveReview(review))

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
        case LOAD_MY_REVIEWS: {
            const newUserReviews = {};

            action.reviews.forEach(review => {
                newUserReviews[review.id] = review
            });

            const newState = {...state, user: newUserReviews}
            return newState
        }
        case RECEIVE_REVIEW: {
            if (state.business[action.review.id]) {
                const newBusinessState = {...state.business, [action.review.id]: action.review}

                return {...state, business: newBusinessState}
            } else {
                const newUserState = {...state.user}
                const newBusinessState = {...state.business}

                newUserState[action.review.id] = {...newUserState[action.review.id], ...action.review}
                newBusinessState[action.review.id] = {...newBusinessState[action.review.id], ...action.review}

                return {...state, user: newUserState, business: newBusinessState}
            }

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
