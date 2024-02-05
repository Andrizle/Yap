import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchBusinesses } from '../../redux/business';
import './Businesses.css'
import { Link } from 'react-router-dom';

function Businesses() {
    const businesses = Object.values(useSelector(state => state.business['allBusinesses']))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkFetchBusinesses())
    }, [dispatch])

    if (!businesses) return null;

    return (
        <>
            {businesses.map(business =>
                <div key={business.id} className='biz'>
                    <Link to={`/business/${business.id}`} className='bizTiles' key={business.id}>
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
                    </Link>

                </div>
            )}
        </>
    )
}

export default Businesses;
