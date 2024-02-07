//types - every variable must be unique
const LOAD_BUSINESSES = 'businesses/getBusinesses'
const LOAD_OWNED_BUSINESSES = 'businesses/getOwnedBusinesses'
const LOAD_BUSINESS = 'businesses/getBusiness'

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

const loadBusiness = business => ({
    type:LOAD_BUSINESS,
    business
})

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
    return fetch('/api/businesses')
    .then(r => r.json())
    .then(d => dispatch(loadBusinesses(d.businesses)))
    .catch(console.error)
};

export const thunkFetchBusiness = businessId => dispatch => {
    return fetch(`/api/businesses/${businessId}`)
    .then(r => r.json())
    .then(d => dispatch(loadBusiness(d)))
    .catch(console.error)
}

export const thunkFetchMyBusinesses = () => dispatch => {
    return fetch('/api/businesses/current')
    .then(r => r.json())
    .then(d => dispatch(loadOwnedBusinesses(d.businesses)))
    .catch(console.error)
}

export const thunkCreateBusiness = business => dispatch => {
    return fetch('/api/businesses/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(business)
    })
    .then(r => r.json())
    .then(d => dispatch(receiveBusiness(d)))
    .catch(console.error)
}

export const thunkEditBusiness = (businessId, business) => async dispatch => {

    const response = await fetch(`/api/businesses/${businessId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(business)
    })

    if (response) {
        const business = await response.json();

        if (business) {
            dispatch(receiveBusiness(business))

            return business
        }
    }
}

export const thunkDeleteBusiness = businessId => dispatch => {
    console.log("🚀 ~ thunkDeleteBusiness ~ thunkDeleteBusiness:", thunkDeleteBusiness)
    return csrfFetch(`/api/businesses/${businessId}`, {method: 'DELETE'})
    .then(dispatch(deleteBusiness(businessId)))
    .catch(console.log)
}

// structure of business state
const initialState = {
    allBusinesses: {},
    ownedBusinesses: {},
}

const businessReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_BUSINESSES: {
            //initialize new all businesses state
            const newAllBusinesses = {...state.allBusinesses};
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
            const newOwnedBusinesses = {...state.ownedBusinesses};
            //create an instance of each business in the new owned business state
            action.businesses.forEach(business => {
                newOwnedBusinesses[business.id] = business
            });
            //initialize new state, spread in old state, and replace old ownedBusinesses with newOwnedBusinesses
            const newState = {...state, ownedBusinesses: newOwnedBusinesses}
            return newState;
        }
        case LOAD_BUSINESS: {
            return {...state, allBusinesses: {...state.allBusinesses, [action.business.id]: action.business}}
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
                ownedBusinesses: newOwnedBusinesses,
                singleBusiness: null
            }

        }
        default:
            return state;
    }
}

export default businessReducer
