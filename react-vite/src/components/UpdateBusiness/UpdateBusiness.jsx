import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { thunkEditBusiness } from '../../redux/business';
import './UpdateBusiness.css'
// import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
// import HoursOfOperation from '../HourOfOperationModal/HoursOfOperation';

function getTodaysFullStartTime(startingHour) {
    const now = Date(Date.now())

    let nowArr = now.split(' ')

    const startTime = nowArr.splice(4, 1, startingHour)

    return Date.parse(startTime)
}

function getTodaysFullEndTime(closingHour) {
    const now = Date(Date.now())

    let nowArr = now.split(' ')

    const closeTime = nowArr.splice(4, 1, closingHour)

    return Date.parse(closeTime)
}

export default function UpdateBusiness() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId])
    const currentUser = useSelector(state => state.session.user)
    const [name, setName] = useState("")
    const [icon, setIcon] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [phone, setPhone] = useState("")
    const [street_address, setStreet_address] = useState("")
    const [suite_unit, setSuite_unit] = useState("")
    const [country, setCountry] = useState("")
    const [zip_code, setZip_code] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    //state variables for regarding the hours of operation section
    const [hours, setHours] = useState('')
    const [openDay, setOpenDay] = useState("")
    const [closeDay, setCloseDay] = useState("")
    const [openHour, setOpenHour] = useState("")
    const [closeHour, setCloseHour] = useState("")
    const [allDay, setAllDay] = useState(false)

    // used to disable label option in the day dropdowns
    const [openDayOpen, setOpenDayOpen] = useState(false)
    const [closeDayOpen, setCloseDayOpen] = useState(false)

    // used to disable label option in the day dropdowns
    const [openHourOpen, setOpenHourOpen] = useState(false)
    const [closeHourOpen, setCloseHourOpen] = useState(false)

    //disable category and price label options
    const [categoryOpen, setCategoryOpen] = useState(false)
    const [priceOpen, setPriceOpen] = useState(false)

    const [errors, setErrors] = useState({})

    //check if the current time falls in the open hours range
    const is_open_now = Date.now() > getTodaysFullStartTime(openHour.split(" ")[0]) && Date.now() < getTodaysFullEndTime(closeHour.split(' ')[0])

    useEffect(() => {

    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(currentUser)

        if (hours === '') {
            setHours(`${openDay} - ${closeDay} : ${openHour} - ${closeHour}`)
        }

        const backendResponse = await dispatch(thunkEditBusiness({
            owner_id: currentUser.id,
            name,
            category,
            price,
            phone,
            street_address,
            suite_unit,
            country,
            zip_code,
            city,
            state,
            hours,
            is_open_now
        }))
        .catch(async res => {
            const data = await res.json();
            if (data?.errors) {
                setErrors(data.errors);
            }});

        if (backendResponse) {
            navigate(`/business/${backendResponse.id}`)
        }
        console.log(Object.values(errors))
    }

    return (
        <div id='addBusinessContainer'>
            <p>{Object.keys(errors)} {Object.values(errors)}</p>
            <h1>Add A New Business Listing</h1>
            <form onSubmit={handleSubmit} id='addBusinessForm'>
                <h2>What is the Name of your Business?</h2>
                <label htmlFor="name">Business Name {errors.name && <span>{errors.name}</span>}</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <div id='addressContainer'>
                    <div id='streetSuiteContainer'>
                        <h2>Address</h2>
                        <label htmlFor="Street_address">Street Address {errors.Street_address && <span>{errors.Street_address}</span>}</label>
                        <input
                            type="text"
                            name="Street_address"
                            value={street_address}
                            onChange={e => setStreet_address(e.target.value)}
                            required
                        />
                        <label htmlFor="Suite_unit">Suite/unit{errors.suite_unit && <span>{errors.suite_unit}</span>}</label>
                        <input
                            type="text"
                            name="Suite_unit"
                            value={suite_unit}
                            onChange={e => setSuite_unit(e.target.value)}
                        />
                    </div>
                    <div id='countryZipContainer'>
                        <label htmlFor="country">Country {errors.country && <span>{errors.country}</span>}</label>
                        <input
                            type="text"
                            name="country"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            required
                        />
                        <label htmlFor="zip_code">Zip code {errors.zip_code && <span>{errors.zip_code}</span>}</label>
                        <input
                            type="text"
                            name="zip_code"
                            value={zip_code}
                            onChange={e => setZip_code(`${e.target.value}`)}
                            required
                        />
                    </div>
                    <div id='cityStateContainer'>
                        <label htmlFor="city">City {errors.city && <span>{errors.city}</span>}</label>
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            required
                        />
                        <label htmlFor="state">State {errors.state && <span>{errors.state}</span>}</label>
                        <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={e => setState(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div id='phoneContainer'>
                    <h2>Phone Number</h2>
                    <p>What&apos;s the best number for customers to reach you at?</p>
                    <input
                        type="number"
                        value={phone} id="phoneInput"
                        onChange={e => setPhone(e.target.value.substr(0, 20))}
                        required
                    />
                </div>
                <div id='hoursContainer'>
                    <h2>Hours of Operation</h2>
                    <div id='addHoursContainer'>
                        <img src="https://s3-media0.fl.yelpcdn.com/assets/public/40x40_operation_hours_v2.yji-0bc0d9d4b51e6fcfdc40.svg" alt="picture of clock" />
                        <div id='hoursText'>
                            <p>Let your customers know when they can stop by or give you a call.</p>
                            {/* <OpenModalMenuItem
                                itemText="Add hours of operation"
                                modalComponent={<HoursOfOperation />}
                                setHours={setHours}
                            /> */}
                            <div className="dayRowContainer">
                                <div className="dayContainer">
                                    <p>Hours for the week: </p>
                                </div>
                                <div className='dayRangeContainer'>
                                    <div className='dayOpenContainer'>
                                        <select
                                            name=""
                                            id="openDay"
                                            disabled={allDay}
                                            onChange={e => setOpenDay(e.target.value)}
                                            required={!allDay}
                                            onClick={() => setOpenDayOpen(true)}>
                                            <option
                                                value=""
                                                label='Choose Opening Day'
                                                disabled={openDayOpen}>Choose Opening Day</option>
                                            <option value="Sun">Sun</option>
                                            <option value="Mon">Mon</option>
                                            <option value="Tues">Tues</option>
                                            <option value="Wed">Wed</option>
                                            <option value="Thurs">Thurs</option>
                                            <option value="Fri">Fri</option>
                                            <option value="Sat">Sat</option>
                                        </select>
                                    </div>
                                    <div>
                                        <svg width="24" height="24" className="icon_svg">
                                            <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                        </svg>
                                    </div>
                                    <div className='dayCloseContainer'>
                                        <select
                                            name=""
                                            id="closeDay"
                                            disabled={allDay}
                                            onChange={e => setCloseDay(e.target.value)}
                                            required={!allDay}
                                            onClick={() => setCloseDayOpen(true)}>
                                            <option value="" label='Choose Closing Day' disabled={closeDayOpen}>Choose Closing Day</option>
                                            <option value="Sun">Sun</option>
                                            <option value="Mon">Mon</option>
                                            <option value="Tues">Tues</option>
                                            <option value="Wed">Wed</option>
                                            <option value="Thurs">Thurs</option>
                                            <option value="Fri">Fri</option>
                                            <option value="Sat">Sat</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="timeRangeContainer">
                                    <div className="dayOpenContainer">
                                        <select
                                            name=""
                                            id="openHours"
                                            disabled={allDay}
                                            onChange={e => setOpenHour(e.target.value)}
                                            required={!allDay}
                                            onClick={() => setOpenHourOpen(true)}>
                                                <option value='' label="Opens at" disabled={openHourOpen}>Opens at</option>
                                                <option value="12:00 AM">12:00 AM</option>
                                                <option value="12:15 AM">12:15 AM</option>
                                                <option value="12:30 AM">12:30 AM</option>
                                                <option value="12:45 AM">12:45 AM</option>
                                                <option value="1:00 AM">1:00 AM</option>
                                                <option value="1:15 AM">1:15 AM</option>
                                                <option value="1:30 AM">1:30 AM</option>
                                                <option value="1:45 AM">1:45 AM</option>
                                                <option value="2:00 AM">2:00 AM</option>
                                                <option value="2:15 AM">2:15 AM</option>
                                                <option value="2:30 AM">2:30 AM</option>
                                                <option value="2:45 AM">2:45 AM</option>
                                                <option value="3:00 AM">3:00 AM</option>
                                                <option value="3:15 AM">3:15 AM</option>
                                                <option value="3:30 AM">3:30 AM</option>
                                                <option value="3:45 AM">3:45 AM</option>
                                                <option value="4:00 AM">4:00 AM</option>
                                                <option value="4:15 AM">4:15 AM</option>
                                                <option value="4:30 AM">4:30 AM</option>
                                                <option value="4:45 AM">4:45 AM</option>
                                                <option value="5:00 AM">5:00 AM</option>
                                                <option value="5:15 AM">5:15 AM</option>
                                                <option value="5:30 AM">5:30 AM</option>
                                                <option value="5:45 AM">5:45 AM</option>
                                                <option value="6:00 AM">6:00 AM</option>
                                                <option value="6:15 AM">6:15 AM</option>
                                                <option value="6:30 AM">6:30 AM</option>
                                                <option value="6:45 AM">6:45 AM</option>
                                                <option value="7:00 AM">7:00 AM</option>
                                                <option value="7:15 AM">7:15 AM</option>
                                                <option value="7:30 AM">7:30 AM</option>
                                                <option value="7:45 AM">7:45 AM</option>
                                                <option value="8:00 AM">8:00 AM</option>
                                                <option value="8:15 AM">8:15 AM</option>
                                                <option value="8:30 AM">8:30 AM</option>
                                                <option value="8:45 AM">8:45 AM</option>
                                                <option value="9:00 AM">9:00 AM</option>
                                                <option value="9:15 AM">9:15 AM</option>
                                                <option value="9:30 AM">9:30 AM</option>
                                                <option value="9:45 AM">9:45 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="10:15 AM">10:15 AM</option>
                                                <option value="10:30 AM">10:30 AM</option>
                                                <option value="10:45 AM">10:45 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="11:15 AM">11:15 AM</option>
                                                <option value="11:30 AM">11:30 AM</option>
                                                <option value="11:45 AM">11:45 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                <option value="12:15 PM">12:15 PM</option>
                                                <option value="12:30 PM">12:30 PM</option>
                                                <option value="12:45 PM">12:45 PM</option>
                                                <option value="1:00 PM">1:00 PM</option>
                                                <option value="1:15 PM">1:15 PM</option>
                                                <option value="1:30 PM">1:30 PM</option>
                                                <option value="1:45 PM">1:45 PM</option>
                                                <option value="2:00 PM">2:00 PM</option>
                                                <option value="2:15 PM">2:15 PM</option>
                                                <option value="2:30 PM">2:30 PM</option>
                                                <option value="2:45 PM">2:45 PM</option>
                                                <option value="3:00 PM">3:00 PM</option>
                                                <option value="3:15 PM">3:15 PM</option>
                                                <option value="3:30 PM">3:30 PM</option>
                                                <option value="3:45 PM">3:45 PM</option>
                                                <option value="4:00 PM">4:00 PM</option>
                                                <option value="4:15 PM">4:15 PM</option>
                                                <option value="4:30 PM">4:30 PM</option>
                                                <option value="4:45 PM">4:45 PM</option>
                                                <option value="5:00 PM">5:00 PM</option>
                                                <option value="5:15 PM">5:15 PM</option>
                                                <option value="5:30 PM">5:30 PM</option>
                                                <option value="5:45 PM">5:45 PM</option>
                                                <option value="6:00 PM">6:00 PM</option>
                                                <option value="6:15 PM">6:15 PM</option>
                                                <option value="6:30 PM">6:30 PM</option>
                                                <option value="6:45 PM">6:45 PM</option>
                                                <option value="7:00 PM">7:00 PM</option>
                                                <option value="7:15 PM">7:15 PM</option>
                                                <option value="7:30 PM">7:30 PM</option>
                                                <option value="7:45 PM">7:45 PM</option>
                                                <option value="8:00 PM">8:00 PM</option>
                                                <option value="8:15 PM">8:15 PM</option>
                                                <option value="8:30 PM">8:30 PM</option>
                                                <option value="8:45 PM">8:45 PM</option>
                                                <option value="9:00 PM">9:00 PM</option>
                                                <option value="9:15 PM">9:15 PM</option>
                                                <option value="9:30 PM">9:30 PM</option>
                                                <option value="9:45 PM">9:45 PM</option>
                                                <option value="10:00 PM">10:00 PM</option>
                                                <option value="10:15 PM">10:15 PM</option>
                                                <option value="10:30 PM">10:30 PM</option>
                                                <option value="10:45 PM">10:45 PM</option>
                                                <option value="11:00 PM">11:00 PM</option>
                                                <option value="11:15 PM">11:15 PM</option>
                                                <option value="11:30 PM">11:30 PM</option>
                                                <option value="11:45 PM">11:45 PM</option>
                                        </select>
                                    </div>
                                    <div>
                                        <svg width="24" height="24" className="icon_svg">
                                            <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                        </svg>
                                    </div>
                                    <div className="dayCloseContainer">
                                        <select
                                            name=""
                                            id="closingHours"
                                            disabled={allDay}
                                            onChange={e => setCloseHour(e.target.value)}
                                            required={!allDay}
                                            onClick={() => setCloseHourOpen(true)}>
                                                <option
                                                    value=""
                                                    label="Closes at"
                                                    disabled={closeHourOpen}>Closes at</option>
                                                <option value="12:00 AM">12:00 AM</option>
                                                <option value="12:15 AM">12:15 AM</option>
                                                <option value="12:30 AM">12:30 AM</option>
                                                <option value="12:45 AM">12:45 AM</option>
                                                <option value="1:00 AM">1:00 AM</option>
                                                <option value="1:15 AM">1:15 AM</option>
                                                <option value="1:30 AM">1:30 AM</option>
                                                <option value="1:45 AM">1:45 AM</option>
                                                <option value="2:00 AM">2:00 AM</option>
                                                <option value="2:15 AM">2:15 AM</option>
                                                <option value="2:30 AM">2:30 AM</option>
                                                <option value="2:45 AM">2:45 AM</option>
                                                <option value="3:00 AM">3:00 AM</option>
                                                <option value="3:15 AM">3:15 AM</option>
                                                <option value="3:30 AM">3:30 AM</option>
                                                <option value="3:45 AM">3:45 AM</option>
                                                <option value="4:00 AM">4:00 AM</option>
                                                <option value="4:15 AM">4:15 AM</option>
                                                <option value="4:30 AM">4:30 AM</option>
                                                <option value="4:45 AM">4:45 AM</option>
                                                <option value="5:00 AM">5:00 AM</option>
                                                <option value="5:15 AM">5:15 AM</option>
                                                <option value="5:30 AM">5:30 AM</option>
                                                <option value="5:45 AM">5:45 AM</option>
                                                <option value="6:00 AM">6:00 AM</option>
                                                <option value="6:15 AM">6:15 AM</option>
                                                <option value="6:30 AM">6:30 AM</option>
                                                <option value="6:45 AM">6:45 AM</option>
                                                <option value="7:00 AM">7:00 AM</option>
                                                <option value="7:15 AM">7:15 AM</option>
                                                <option value="7:30 AM">7:30 AM</option>
                                                <option value="7:45 AM">7:45 AM</option>
                                                <option value="8:00 AM">8:00 AM</option>
                                                <option value="8:15 AM">8:15 AM</option>
                                                <option value="8:30 AM">8:30 AM</option>
                                                <option value="8:45 AM">8:45 AM</option>
                                                <option value="9:00 AM">9:00 AM</option>
                                                <option value="9:15 AM">9:15 AM</option>
                                                <option value="9:30 AM">9:30 AM</option>
                                                <option value="9:45 AM">9:45 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="10:15 AM">10:15 AM</option>
                                                <option value="10:30 AM">10:30 AM</option>
                                                <option value="10:45 AM">10:45 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="11:15 AM">11:15 AM</option>
                                                <option value="11:30 AM">11:30 AM</option>
                                                <option value="11:45 AM">11:45 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                <option value="12:15 PM">12:15 PM</option>
                                                <option value="12:30 PM">12:30 PM</option>
                                                <option value="12:45 PM">12:45 PM</option>
                                                <option value="1:00 PM">1:00 PM</option>
                                                <option value="1:15 PM">1:15 PM</option>
                                                <option value="1:30 PM">1:30 PM</option>
                                                <option value="1:45 PM">1:45 PM</option>
                                                <option value="2:00 PM">2:00 PM</option>
                                                <option value="2:15 PM">2:15 PM</option>
                                                <option value="2:30 PM">2:30 PM</option>
                                                <option value="2:45 PM">2:45 PM</option>
                                                <option value="3:00 PM">3:00 PM</option>
                                                <option value="3:15 PM">3:15 PM</option>
                                                <option value="3:30 PM">3:30 PM</option>
                                                <option value="3:45 PM">3:45 PM</option>
                                                <option value="4:00 PM">4:00 PM</option>
                                                <option value="4:15 PM">4:15 PM</option>
                                                <option value="4:30 PM">4:30 PM</option>
                                                <option value="4:45 PM">4:45 PM</option>
                                                <option value="5:00 PM">5:00 PM</option>
                                                <option value="5:15 PM">5:15 PM</option>
                                                <option value="5:30 PM">5:30 PM</option>
                                                <option value="5:45 PM">5:45 PM</option>
                                                <option value="6:00 PM">6:00 PM</option>
                                                <option value="6:15 PM">6:15 PM</option>
                                                <option value="6:30 PM">6:30 PM</option>
                                                <option value="6:45 PM">6:45 PM</option>
                                                <option value="7:00 PM">7:00 PM</option>
                                                <option value="7:15 PM">7:15 PM</option>
                                                <option value="7:30 PM">7:30 PM</option>
                                                <option value="7:45 PM">7:45 PM</option>
                                                <option value="8:00 PM">8:00 PM</option>
                                                <option value="8:15 PM">8:15 PM</option>
                                                <option value="8:30 PM">8:30 PM</option>
                                                <option value="8:45 PM">8:45 PM</option>
                                                <option value="9:00 PM">9:00 PM</option>
                                                <option value="9:15 PM">9:15 PM</option>
                                                <option value="9:30 PM">9:30 PM</option>
                                                <option value="9:45 PM">9:45 PM</option>
                                                <option value="10:00 PM">10:00 PM</option>
                                                <option value="10:15 PM">10:15 PM</option>
                                                <option value="10:30 PM">10:30 PM</option>
                                                <option value="10:45 PM">10:45 PM</option>
                                                <option value="11:00 PM">11:00 PM</option>
                                                <option value="11:15 PM">11:15 PM</option>
                                                <option value="11:30 PM">11:30 PM</option>
                                                <option value="11:45 PM">11:45 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <input type="checkbox" name="24/7" onChange={() => {setAllDay(!allDay); setHours('Sun - Sat: 12:00 AM - 12:00AM')}} />
                                    <label htmlFor="24/7">24/7</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='catPriceContainer'>
                    <h2>Service & Price</h2>
                    <div id='categoryContainer'>
                        <p>What sort of service are you providing?</p>
                        <select
                            name=""
                            id="categorySelect"
                            onChange={e => setCategory(e.target.value)}
                            required
                            onClick={() => setCategoryOpen(true)}>
                                <option value=""
                                    label='select category'
                                    required
                                    disabled={categoryOpen}>select category</option>
                                <option value="Restaurants">Restaurants</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Nightlife">Nightlife</option>
                                <option value="ActiveLife">ActiveLife</option>
                                <option value="Beauty&Spas">Beauty & Spas</option>
                                <option value="Automotive">Automotive</option>
                                <option value="HomeServices">HomeServices</option>
                                <option value="Coffee&Tea">Coffee & Tea</option>
                                <option value="Other">Other</option>
                        </select>
                    </div>
                    <div id='priceContainer'>
                        <p>What prices can customers expect?</p>
                        <select name=""
                            id="priceSelect"
                            onChange={e => setPrice(e.target.value)}
                            required
                            onClick={() => setPriceOpen(true)}>
                                <option value=""
                                    label='How much we talkin&apos;?'
                                    disabled={priceOpen}>How much we talkin?</option>
                                <option value="$">$</option>
                                <option value="$$">$$</option>
                                <option value="$$$">$$$</option>
                                <option value="$$$$">$$$$</option>
                        </select>
                    </div>
                </div>
                <div id='addBusinessBtn'>
                    <button type='submit'>Post Business</button>
                </div>
            </form>
        </div>
    )
}
