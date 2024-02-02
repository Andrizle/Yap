import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { thunkFetchMyBusinesses } from '../../redux/business';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import RemoveBusinessModal from '../RemoveBusinessModal/RemoveBusinessModal';
import './Businesses.css'

function MyBusinesses() {
    const businesses = Object.values(useSelector(state => state.business.ownedBusinesses))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(thunkFetchMyBusinesses())
    }, [dispatch])

    if (!businesses) return null;

    return (
        <>
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
                    <div>
                        <button
                            className='modalBtn'
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