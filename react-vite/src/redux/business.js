const LOAD_BUSINESSES = 'businesses/getBusinesses'

const CREATE_BUSINESS = 'businesses/createBusiness'

const loadBusinesses = businesses => ({
    type: LOAD_BUSINESSES,
    businesses
});

const addBusiness = business => ({
    type: CREATE_BUSINESS,
    business
});

export const thunkFetchBusinesses = () => dispatch => {
    fetch('/api/businesses')
    .then(r => r.json())
    .then(d => dispatch(loadBusinesses(d.businesses)))
    .catch(console.error)
};

export const thunkCreateBusiness = business => dispatch => {
    fetch('/api/businesses/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(business)
    })
    .then(r => r.json())
    .then(d => dispatch(addBusiness(d)))
    .catch(console.error)
}

const businessReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD_BUSINESSES: {
            const businessesState = {...state};
            action.businesses.forEach(business => {
                businessesState[business.id] = business
            });
            return businessesState;
        }
        case CREATE_BUSINESS:
            return {...state, [action.business.id]: action.business}
        default:
            return state;
    }
}

export default businessReducer
