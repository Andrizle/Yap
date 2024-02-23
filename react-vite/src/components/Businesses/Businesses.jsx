import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchBusinesses } from '../../redux/business';
import './Businesses.css'
import { Link, useNavigate } from 'react-router-dom';
import RatingDisplay from './RatingDisplay';


function Businesses() {
    const businesses = Object.values(useSelector(state => state.business['allBusinesses']))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(thunkFetchBusinesses())
    }, [dispatch])

    if (!businesses) return null;

    return (
        <div id='bizPage'>
            <div>
            <div id='catContainer'>
                <h1 id='catHeader'>Categories</h1>
                <div id='catTilesContainer'>
                    <div id='restCatTile' className='catTiles' onClick={() => navigate('search/restaurants')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/8bc05b287157/assets/img/svg_illustrations/40x40_food_v2.svg" />
                        </div>
                        <p>Restaurants</p>
                    </div>
                    <div id='shopCatTile' className='catTiles' onClick={() => navigate('search/shopping')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/488aeb87ef6e/assets/img/svg_illustrations/40x40_gift_shops_v2.svg" />
                        </div>
                        <p>Shopping</p>
                    </div>
                    <div id='nightCatTile' className='catTiles' onClick={() => navigate('search/nightlife')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/1397897c21a5/assets/img/svg_illustrations/40x40_new_v2.svg" />
                        </div>
                        <p>Nightlife</p>
                    </div>
                    <div id='activeCatTile' className='catTiles' onClick={() => navigate('search/activeLife')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/0372f8e93aa9/assets/img/svg_illustrations/40x40_set_objective_v2.svg" />
                        </div>
                        <p>Active Life</p>
                    </div>
                    <div id='beautyCatTile' className='catTiles' onClick={() => navigate('search/beauty&spas')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/0372f8e93aa9/assets/img/svg_illustrations/40x40_set_objective_v2.svg" />
                        </div>
                        <p>Beauty & Spas</p>
                    </div>
                    <div id='autoCatTile' className='catTiles' onClick={() => navigate('search/automotive')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/5967f38fe621/assets/img/svg_illustrations/40x40_auto_v2.svg" />
                        </div>
                        <p>Automotive</p>
                    </div>
                    <div id='homeCatTile' className='catTiles' onClick={() => navigate('search/homeServices')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/7fc312973cf8/assets/img/svg_illustrations/40x40_home_services_v2.svg" />
                        </div>
                        <p>Home Services</p>
                    </div>
                    <div id='otherCatTile' className='catTiles' onClick={() => navigate('search/other')}>
                        <div>
                            <img className="" src="https://s3-media0.fl.yelpcdn.com/assets/public/40x40_more_v2.yji-961fdce2fd036f85fb01.svg" />
                        </div>
                        <p>Other</p>
                    </div>
                </div>
            </div>
            <div id='categoryDivider'></div>
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
        </div>
    )
}

export default Businesses;
