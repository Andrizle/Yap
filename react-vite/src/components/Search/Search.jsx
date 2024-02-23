import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { thunkFetchCatBusinesses } from '../../redux/business';
import { Link, useParams } from 'react-router-dom';
import { RatingDisplay } from '../Businesses';

export default function Search () {
    const businesses = Object.values(useSelector(state => state.business.catBusinesses))
    const dispatch = useDispatch();
    const {category} = useParams();
    const [catParam, setCatParam] = useState('')

    useEffect(() => {
        if (category === 'restaurants') {
            setCatParam('Restaurants')
        }
        if (category === 'shopping') {
            setCatParam('Shopping')
        }
        if (category === 'nightlife') {
            setCatParam('Nightlife')
        }
        if (category === 'activeLife') {
            setCatParam('Active Life')
        }
        if (category === 'beauty&spas') {
            setCatParam('Beauty & Spas')
        }
        if (category === 'automotive') {
            setCatParam('Automotive')
        }
        if (category === 'homeServices') {
            setCatParam('Home Services')
        }
        if (category === 'other') {
            setCatParam('Other')
        }

    }, [category])

    useEffect(() => {
        if (catParam) {
            dispatch(thunkFetchCatBusinesses(catParam))
        }
    }, [dispatch, catParam, category])

    if (businesses[0]?.category != catParam) return null;

    return (
        <div>
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
