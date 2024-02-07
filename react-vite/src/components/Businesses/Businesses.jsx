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
        <div id='bizPage'>
            <div id='bizTilesContainer'>
                {businesses.map(business =>
                    <div key={business.id} className='biz'>
                        <Link to={`/business/${business.id}`} className='bizTiles' key={business.id}>
                            <img src={business.icon} alt="" />
                            <div className='bizDetailsContainer'>
                                <h2>
                                    {business.name}
                                </h2>
                                <div className='bizRatingContainer'>
                                     <div>
                                    {business.rating.toFixed(1)}
                                    </div>
                                    <div className='bizReviewCountContainer'>
                                        ({business.review_count} {business.review_count === 1 ? 'review' : 'reviews'})
                                    </div>
                                </div>
                                <div className='bizCatPriceContainer'>
                                    <div className='bizCategoryContainer'>
                                    {business.category}
                                    </div>
                                    <div className='bizPriceContainer'>
                                        {business.price}
                                    </div>
                                </div>
                                <div className='bizCityContainer'>
                                    {business.city}
                                </div>
                                <div>
                                    {business.hours}
                                </div>
                            </div>
                        </Link>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Businesses;
