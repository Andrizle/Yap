import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import { thunkFetchBusiness } from "../../redux/business";
import './SingleBusiness.css'

export default function SingleBusiness() {
    const dispatch = useDispatch();
    const {businessId } = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const business = useSelector(state => state.business.allBusinesses[businessId])

    useEffect(() => {
        dispatch(thunkFetchBusiness(businessId))
    }, [dispatch, businessId])

    if (!business) return null;

    return (
        <div className="singleBusinessContainer">
            <div className="imagesContainer">
                <img src={business.icon} alt="" />
            </div>
            <div className="businessDetailsContainer">
                <div className="businessMainContent">
                    <div className="businessNameContainer">
                        <h1 className="businessName">{business.name}</h1>
                    </div>
                    <div className="businessReviews">{business.rating} ({business.review_count})</div>
                    <div className="businessPriceCategory">
                        <span>{business.price}</span>
                        <span> • </span>
                        <span>{business.category}</span>
                    </div>
                    <div>
                        <span>{business.hours}</span>
                    </div>
                </div>
                <div className="businessAddressPhone">
                    <div>{business.street_address} {business.city}, {business.state} <br /> {business.zip_code}</div>
                    <div>{business.phone}</div>
                </div>
            </div>
            <div className="reviewsContainer"></div>
        </div>
    )
}
