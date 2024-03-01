//types - every variable must be unique
const LOAD_BUSINESSES = 'businesses/getBusinesses'
const LOAD_CAT_BUSINESSES = 'businesses/getCatBusinesses'
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

const loadCatBusinesses = businesses => ({
    type: LOAD_CAT_BUSINESSES,
    businesses
})

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
export const thunkFetchBusinesses = () => async dispatch => {
    const response = await fetch('/api/businesses')

    if (response.ok) {
        const businesses = await response.json();

        dispatch(loadBusinesses(businesses.businesses))

        return businesses
    }
};

export const thunkFetchCatBusinesses = (cat) => async dispatch => {
    const response = await fetch(`/api/businesses/${cat}`)

    if (response.ok) {
        const businesses = await response.json();

        dispatch(loadCatBusinesses(businesses.businesses))

        return businesses
    }
}

export const thunkFetchBusiness =  businessId => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`)

    if (response.ok) {
        const business = await response.json();

        dispatch(loadBusiness(business))

        return business
    }
}

export const thunkFetchMyBusinesses = () => async dispatch => {
    const response = await fetch('/api/businesses/current')

    if (response.ok) {
        const businesses = await response.json();

        dispatch(loadOwnedBusinesses(businesses.businesses))

        return businesses
    }
}

export const thunkCreateBusiness = business => async dispatch => {
    const response = await fetch('/api/businesses/new', {
        method: 'POST',
        body:business
    })

    if (response.ok) {
        const business = await response.json();

        dispatch(receiveBusiness(business))

    } else {
        console.log('There was an error making your post!', await response.json())
    }
    return business
}

export const thunkEditBusiness = (businessId, business) => async dispatch => {

    const response = await fetch(`/api/businesses/${businessId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(business)
    })

    if (response.ok) {
        const business = await response.json();

        dispatch(receiveBusiness(business))

        return business

    }
}

export const thunkDeleteBusiness = businessId => async dispatch => {
    const response = await fetch(`/api/businesses/${businessId}`, {method: 'DELETE'})

    if (response.ok) {
        dispatch(deleteBusiness(businessId))

        return businessId
    }

}

// structure of business state
const initialState = {
    allBusinesses: {},
    ownedBusinesses: {},
    catBusinesses: {},
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
        case LOAD_CAT_BUSINESSES: {
            const newCatBusinesses = {};

            action.businesses.forEach(business => {
                newCatBusinesses[business.id] = business
            });

            const newState = {...state, catBusinesses: newCatBusinesses}
            return newState
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
