
const LOAD_BUSINESSES = 'businesses/getBusinesses'

const loadBusinesses = businesses => ({
    type: LOAD_BUSINESSES,
    businesses
});

export const thunkFetchBusinesses = () => dispatch => {
    fetch('/api/businesses')
    .then(r => r.json())
    .then(d => dispatch(loadBusinesses(d.businesses)))
    .catch(console.error)
};

const businessReducer = (state = {}, action) => {
    switch(action.type) {
        case LOAD_BUSINESSES: {
            const businessesState = {...state};
            action.businesses.forEach(business => {
                businessesState[business.id] = business
            });
            return businessesState;
        }
        default:
            return state;
    }
}

export default businessReducer
