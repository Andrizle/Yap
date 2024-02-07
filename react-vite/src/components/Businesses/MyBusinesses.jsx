import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { thunkFetchMyBusinesses } from '../../redux/business';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import RemoveBusinessModal from '../RemoveBusinessModal/RemoveBusinessModal';
import './Businesses.css'

function MyBusinesses() {
    let businesses = useSelector(state => state.business['ownedBusinesses'])
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(thunkFetchMyBusinesses())
    }, [dispatch])

    if (!businesses) return null;
    businesses = Object.values(businesses)

    return (
        <>
            {businesses.map(business =>
                <div key={business.id} className='bizTiles'>
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
                    <div>
                        <button
                            className='modalBtn'
                            id='writeReviewBtn'
                            onClick={() => navigate(`/business/${business.id}/edit`)}>Update</button>
                        <OpenModalMenuItem
                            itemText="Delete"
                            modalComponent={<RemoveBusinessModal businessId={business.id} />}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default MyBusinesses;
