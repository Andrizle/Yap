import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchBusinesses } from '../../redux/business';
import './Businesses.css'
import { Link } from 'react-router-dom';
import RatingDisplay from './RatingDisplay';


function Businesses() {
    const businesses = Object.values(useSelector(state => state.business['allBusinesses']))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkFetchBusinesses())
    }, [dispatch])

    if (!businesses) return null;

    return (
        <div id='bizPage'>
            <div id='catContainer'>
                <h1 id='catHeader'>Categories</h1>
                <div id='catTilesContainer'>
                    <div id='restCatTile'></div>
                    <div id='shopCatTile'></div>
                    <div id='nightCatTile'></div>
                    <div id='activeCatTile'></div>
                    <div id='beautyCatTile'></div>
                    <div id='autoCatTile'></div>
                    <div id='homeCatTile'></div>
                    <div id='otherCatTile'></div>
                </div>
            </div>
            <div id='bizTilesContainer'>
                {businesses.map(business =>
                    <div key={business.id} className='biz'>
                        <Link to={`/business/${business.id}`} className='allBizTiles' key={business.id}>
                            <img src={business.icon} className='bizIcon' />
                            <div className='bizDetailsContainer'>
                                <h2>
                                    {business.name}
                                </h2>
                                {
                                    business.review_count != 0 ?
                                    <div className='bizRatingContainer'>
                                        <div className='bizStarDisplay'>
                                            <RatingDisplay stars={business.rating}/>
                                        </div>
                                         <div>
                                        {business.rating.toFixed(1)}
                                        </div>
                                        <div className='bizReviewCountContainer'>
                                            ({business.review_count} {business.review_count === 1 ? 'review' : 'reviews'})
                                        </div>
                                    </div>
                                    : null
                                }
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
                        <div className='allBizTilesDivider'></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Businesses;
