import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchBusinesses } from '../../redux/business';
import './Businesses.css'

function Businesses() {
    const businesses = Object.values(useSelector(state => state.business))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkFetchBusinesses())
    }, [dispatch])

    if (!businesses) return null;
    console.log(businesses)

    return (
        <>
            <h1>Welcome!</h1>
            {console.log(businesses)}
            {businesses.map(business =>
                <div key={business.id} className='bizTiles'>
                    <img src={business.icon} alt="" />
                    <div>
                        <div>
                            {business.name}
                        </div>
                        <div>
                            {business.rating}
                        </div>
                        <div>
                            ({business.review_count})
                        </div>
                        <div>
                            {business.category}
                        </div>
                        <div>
                            {business.price}
                        </div>
                        <div>
                            {business.city}
                        </div>
                        <div>
                            {business.hours}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Businesses;
