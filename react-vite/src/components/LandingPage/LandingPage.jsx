import { useEffect } from 'react';
import './LandingPage.css'
import Businesses from '../Businesses';
import { useDispatch, useSelector } from 'react-redux';
import { thunkFetchBusinesses } from '../../redux/business';


function LandingPage() {

    return (
        <div>
            <Businesses />
        </ div>
    )
}

export default LandingPage;
