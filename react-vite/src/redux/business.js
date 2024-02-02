import { csrfFetch } from "./csrf"

//types - every variable must be unique
const LOAD_BUSINESSES = 'businesses/getBusinesses'
const LOAD_OWNED_BUSINESSES = 'businesses/getOwnedBusinesses'

const RECEIVE_BUSINESS = 'businesses/receiveBusiness'

const ADD_IMAGE = 'businesses/addImage'

const DELETE_BUSINESS = 'businesses/deleteBusiness'

//business action creators
const loadBusinesses = businesses => ({
    type: LOAD_BUSINESSES,
    businesses
});

const loadOwnedBusinesses = businesses => ({
    type: LOAD_OWNED_BUSINESSES,
    businesses
});

const receiveBusiness = business => ({
    type: RECEIVE_BUSINESS,
    business
});

const addImage = image => ({
    type:ADD_IMAGE,
    image
})

const deleteBusiness = businessId => ({
    type: DELETE_BUSINESS,
    businessId
})

//business thunk action creators
export const thunkFetchBusinesses = () => dispatch => {
    fetch('/api/businesses')
    .then(r => r.json())
    .then(d => dispatch(loadBusinesses(d.businesses)))
    .catch(console.error)
};

export const thunkFetchBusiness = businessId => dispatch => {
    fetch(`/api/businesses/${businessId}`)
    .then(r => r.json())
    .then(d => dispatch(addBusiness(d)))
    .catch(console.error)
}

export const thunkFetchMyBusinesses = () => dispatch => {
    fetch('/api/businesses/current')
    .then(r => r.json())
    .then(d => dispatch(loadOwnedBusinesses(d.businesses)))
    .catch(console.error)
}

export const thunkCreateBusiness = business => dispatch => {
    fetch('/api/businesses/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(business)
    })
    .then(r => r.json())
    .then(d => dispatch(receiveBusiness(d)))
    .catch(console.error)
}

export const thunkEditBusiness = (businessId, business) => {
    fetch(`/api/businesses/${businessId}`, {
        method: 'PUT',
        body: JSON.stringify(business)
    })
    .then(r => r.json())
    .then(d => dispatch(receiveBusiness(d)))
    .catch(console.error)
}

export const thunkDeleteBusiness = businessId => dispatch => {
    fetch(`/api/business/${businessId}`, {method: 'DELETE'})
    .then(dispatch(deleteBusiness(businessId)))
    .catch(console.log)
}

// structure of business state
const initialState = {
    allBusinesses: {},
    ownedBusinesses: {}
}

const businessReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_BUSINESSES: {
            //initialize new all businesses state
            const newAllBusinesses = {};
            //create an instance of each business in the new all business state
            action.businesses.forEach(business => {
                newAllBusinesses[business.id] = business
            });
            //initialize new state, spread in old state, and replace old allBusinesses with newAllBusinesses
            const newState = {...state, allBusinesses: newAllBusinesses}
            return newState;
        }
        case LOAD_OWNED_BUSINESSES: {
            //initialize new owned businesses state
            const newOwnedBusinesses = {};
            //create an instance of each business in the new owned business state
            action.businesses.forEach(business => {
                newOwnedBusinesses[business.id] = business
            });
            //initialize new state, spread in old state, and replace old ownedBusinesses with newOwnedBusinesses
            const newState = {...state, ownedBusinesses: newOwnedBusinesses}
            return newState;
        }
        case RECEIVE_BUSINESS:
            //handle creating a business
            if (!state.allBusinesses[action.business.id]) {
                //create new state for all businesses with old state spread in
                //insert new business into all businesses state
                const newAllBusinesses = {...state.allBusinesses, [action.business.id]: action.business}
                //spread in old state, and replace allSpots state with newAllBusinesses
                return {...state, allBusinesses: newAllBusinesses}
            }
            //else handle editing a business
            else {
                //instance of this business already exists in state
                //initialize newAllBusinesses state, spread in old allBusiness state
                const newAllBusinesses = {...state.allBusinesses}
                //newAllBusiness now has all the old info
                //target business of interest in newAllBusinesses, spread old info and replace with new info
                newAllBusinesses[action.business.id] = {...newAllBusinesses[action.business.id], ...action.business}
                return {
                    ...state,
                    allBusinesses: newAllBusinesses
                }

            }
        //need to delete business from both locations
        case DELETE_BUSINESS: {
            //initialize newAllBusinesses state with old state spread in
            const newAllBusinesses = {...state.allBusinesses}
            //target business in newAllBusinesses state and delete it
            delete newAllBusinesses[action.businessId]

            //initialize newOwnedBusinesses state with old state spread in
            const newOwnedBusinesses = {...state.ownedBusinesses}
            //target and delete business from this state
            delete newOwnedBusinesses[action.businessId]

            //return new state with adjustments
            return {
                ...state,
                allBusinesses: newAllBusinesses,
                ownedBusinesses: newOwnedBusinesses
            }

        }
        default:
            return state;
    }
}

export default businessReducer
