import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { thunkFetchMyBusinesses } from '../../redux/business';
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import RemoveBusinessModal from '../RemoveBusinessModal/RemoveBusinessModal';
import './MyBusinesses.css'
import RatingDisplay from './RatingDisplay';

function MyBusinesses() {
    const sessionUser = useSelector(state => state.session.user)
    const businesses = Object.values(useSelector(state => state.business.ownedBusinesses))
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(thunkFetchMyBusinesses())
    }, [dispatch])

    if (!businesses) return null;
    // businesses = Object.values(businesses)

    return (
        <>
            <div id='myBizHeader'>
                <h1 >Good evening, {sessionUser.username}</h1>
                {businesses.length != 0 && <h4>Here&apos;s a look at your Businesses</h4>}
            </div>
            <div id='myBizTilesContainer'>
                {businesses.length ? businesses.map(business =>
                    <div key={business.id} className='myBizTiles'>
                        <Link to={`/business/${business.id}`} className='bizTiles' key={business.id}>
                            <img src={business.icon} alt="" />
                            <div className='bizDetailsContainer'>
                                <h2>
                                    {business.name}
                                </h2>
                                {business.review_count != 0 ?
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
                                :
                                <div className='bizRatingContainer'>
                                    <i className="fas fa-star"></i>
                                    <span>New!</span>
                                </div>


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
                        <div id='myBizButtons'>
                            <button
                                className='modalBtn redBtn'
                                onClick={() => navigate(`/business/${business.id}/edit`)}>Update</button>
                            <OpenModalMenuItem
                                itemText="Delete"
                                modalComponent={<RemoveBusinessModal businessId={business.id} />}
                            />
                        </div>
                    </div>
                ) :
                    <div className='noBizContainer'>
                        <div className='noBizContent'>
                            <div className='noBizContentHeader'>
                                <h2>Getting started</h2>
                            </div>
                            <div className='noBizContentDivider'></div>
                            <div className='noBizContentDetails'>
                                <div id='noBizLogo'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                      <g fill="none" fillRule="evenodd">
                                        <path fill="#EEEEEF" fillRule="nonzero" d="M37.39,14.62 C37.0242746,14.4627036 36.6000832,14.5373299 36.31,14.81 L28,22.71 L28,23 L30,23 L30,37 L5.99999995,37 L5.99999995,19 L7.99999995,19 L7.99999995,8.99999997 L9.06999997,8.99999997 L3.72999996,3.31999996 C3.44990141,3.02081736 3.01560375,2.92282903 2.63417523,3.07275469 C2.2527467,3.22268035 2.00141013,3.59016654 1.99999996,3.99999996 L1.99999996,37 C1.99999996,37.5522848 2.44771521,38 2.99999995,38 L37,38 C37.5522848,38 38,37.5522848 38,37 L38,15.54 C38,15.1387198 37.759505,14.7764992 37.39,14.62 Z"></path>
                                        <path fill="#2B273C" fillRule="nonzero" d="M29 26L29 36 23 36 23 28C23 27.4477153 22.5522848 27 22 27L14 27C13.4477152 27 13 27.4477153 13 28L13 36 6.99999996 36 6.99999996 26 4.99999996 26 4.99999996 37C4.99999996 37.5522848 5.44771521 38 5.99999996 38L30 38C30.5522848 38 31 37.5522848 31 37L31 26 29 26zM15 29L21 29 21 36 15 36 15 29zM22 8.27999997C21.9944584 8.18674889 21.9944584 8.09325105 22 7.99999997L7.99999997 7.99999997C7.44771522 7.99999997 6.99999997 8.44771522 6.99999997 8.99999997L6.99999997 12 8.99999997 12 8.99999997 9.99999997 22.57 9.99999997C22.2072574 9.49912267 22.008174 8.89837968 22 8.27999997L22 8.27999997z"></path>
                                        <path fill="#F43939" fillRule="nonzero" d="M35,5.96397229 L37.5017181,7.41496878 C38.1670536,7.80086335 38.1658531,8.76205025 37.4995558,9.14628169 L35,10.5876922 L35,13.47 C35,14.2395724 34.1671108,14.7207261 33.5004442,14.3362817 L31,12.8943589 L28.4995558,14.3362817 C27.8328893,14.7207261 27,14.2395724 27,13.47 L27,10.5876922 L24.5004442,9.14628169 C23.8341469,8.76205025 23.8329465,7.80086335 24.4982819,7.41496878 L27,5.96397229 L27,3.07999996 C27,2.31042752 27.8328893,1.82927387 28.4995558,2.21371824 L31,3.65564107 L33.5004442,2.21371824 C34.1671108,1.82927387 35,2.31042752 35,3.07999996 L35,5.96397229 Z M33.4982819,7.40503116 C33.1898494,7.22614031 33,6.89655647 33,6.53999997 L33,4.81102552 L31.4995558,5.67628168 C31.1903806,5.85457272 30.8096194,5.85457272 30.5004442,5.67628168 L29,4.81102552 L29,6.53999997 C29,6.89655647 28.8101506,7.22614031 28.5017181,7.40503116 L26.9974524,8.27750528 L28.4995558,9.14371826 C28.8092072,9.32228389 29,9.65255115 29,10.01 L29,11.7389744 L30.5004442,10.8737183 C30.8096194,10.6954272 31.1903806,10.6954272 31.4995558,10.8737183 L33,11.7389744 L33,10.01 C33,9.65255115 33.1907928,9.32228389 33.5004442,9.14371826 L35.0025477,8.27750528 L33.4982819,7.40503116 Z"></path>
                                        <path fill="#F43939" fillRule="nonzero" d="M31.18,15.31 L31,15.2 L29.5,16.07 C28.6551239,16.5487533 27.63077,16.5889382 26.7509856,16.1778425 C25.8712011,15.7667469 25.2448224,14.9552264 25.07,13.9999947 L5.99999997,13.9999947 C5.58152744,13.9986406 5.20646391,14.2579931 5.05999996,14.65 L2.05999996,22.65 C1.94671014,22.9577896 1.99155075,23.3015676 2.17999996,23.57 C2.36651724,23.8388622 2.67277632,23.9994615 2.99999996,23.9999947 L33,23.9999947 C33.3272237,23.9994615 33.6334828,23.8388622 33.82,23.57 C34.0084492,23.3015676 34.0532899,22.9577896 33.94,22.65 L31.18,15.31 Z"></path>
                                      </g>
                                    </svg>
                                </div>

                                <div className='noBizContentText'>
                                    <span>
                                        <h4>Looks like you don&apos;t have any Businesses</h4>
                                    </span>
                                    <p>Start by making one now!</p>
                                    <button
                                        className='modalBtn noBizAddBtn redBtn'
                                        onClick={() => navigate('/business/new')}>Add a Business
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default MyBusinesses;
