import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import './HoursOfOperation.css'

export default function HoursOfOperation({setHours}) {
    const [sunOpen, setSunOpen] = useState({})
    const [monOpen, setMonOpen] = useState({})
    const [tuesOpen, setTuesOpen] = useState({})
    const [wedOpen, setWedOpen] = useState({})
    const [thursOpen, setThursOpen] = useState({})
    const [friOpen, setFriOpen] = useState({})
    const [satOpen, setSatOpen] = useState({})
    const { closeModal } = useModal();

    const [sunClose, setSunClose] = useState({})
    const [monClose, setMonClose] = useState({})
    const [tuesClose, setTuesClose] = useState({})
    const [wedClose, setWedClose] = useState({})
    const [thursClose, setThursClose] = useState({})
    const [friClose, setFriClose] = useState({})
    const [satClose, setSatClose] = useState({})

    const handleSubmit = e => {
        e.preventDefault();

        const HOO = [
            sun,
            mon,
            tues,
            wed,
            thurs,
            fri,
            sat,
        ]

        setHours(HOO)

        closeModal();

    }

    return (
        <div id="businessHoursModal">
            <h1>Business hours</h1>
            <p>Add your business hours so customers know when you're open.</p>
            <div>
                <img src="https://s3-media0.fl.yelpcdn.com/assets/public/40x40_operation_hours_v2.yji-0bc0d9d4b51e6fcfdc40.svg" alt="clock symbol" />
                <h2>When are you open?</h2>
            </div>
            <div id="hoursContainer">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="dayRowContainer">
                        <div className="dayContainer">
                            <p>Sunday: </p>
                        </div>
                        <div className="timeRangeContainer">
                            <div className="dayOpenContainer">
                                <select name="" id="sunOpens" onSelect={e => setSun(e.target.value)}>
                                    <optgroup>
                                        <option value="" label="Opens at" disabled="">Opens at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <svg width="24" height="24" className="icon_svg">
                                    <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                </svg>
                            </div>
                            <div className="dayOpenContainer">
                                <select name="" id="sunCloses">
                                    <optgroup>
                                        <option value="" label="Closes at" disabled="">Closes at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="closedContainer">
                            <input type="checkbox" name="closed" className="closedCheckbox" />
                            <label htmlFor="closed">Closed</label>
                        </div>
                    </div>
                    <div className="dayRowContainer">
                        <div className="dayContainer">
                            <p>Monday: </p>
                        </div>
                        <div className="timeRangeContainer">
                            <div className="dayOpenContainer">
                                <select name="" id="monOpen">
                                    <optgroup>
                                        <option value="" label="Opens at" disabled="">Opens at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <svg width="24" height="24" className="icon_svg">
                                    <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                </svg>
                            </div>
                            <div className="dayOpenContainer">
                                <select name="" id="monCloses">
                                    <optgroup>
                                        <option value="" label="Closes at" disabled="">Closes at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="closedContainer">
                            <input type="checkbox" name="closed" className="closedCheckbox" />
                            <label htmlFor="closed">Closed</label>
                        </div>
                    </div>
                    <div className="dayRowContainer">
                        <div className="dayContainer">
                            <p>Tuesday: </p>
                        </div>
                        <div className="timeRangeContainer">
                            <div className="dayOpenContainer">
                                <select name="" id="tuesOpens">
                                    <optgroup>
                                        <option value="" label="Opens at" disabled="">Opens at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <svg width="24" height="24" className="icon_svg">
                                    <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                </svg>
                            </div>
                            <div className="dayOpenContainer">
                                <select name="" id="tuesCloses">
                                    <optgroup>
                                        <option value="" label="Closes at" disabled="">Closes at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="closedContainer">
                            <input type="checkbox" name="closed" className="closedCheckbox" />
                            <label htmlFor="closed">Closed</label>
                        </div>
                    </div>
                    <div className="dayRowContainer">
                        <div className="dayContainer">
                            <p>Wednesday: </p>
                        </div>
                        <div className="timeRangeContainer">
                            <div className="dayOpenContainer">
                                <select name="" id="wedOpens">
                                    <optgroup>
                                        <option value="" label="Opens at" disabled="">Opens at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <svg width="24" height="24" className="icon_svg">
                                    <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                </svg>
                            </div>
                            <div className="dayOpenContainer">
                                <select name="" id="wedCloses">
                                    <optgroup>
                                        <option value="" label="Closes at" disabled="">Closes at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="closedContainer">
                            <input type="checkbox" name="closed" className="closedCheckbox" />
                            <label htmlFor="closed">Closed</label>
                        </div>
                    </div>
                    <div className="dayRowContainer">
                        <div className="dayContainer">
                            <p>Thursday: </p>
                        </div>
                        <div className="timeRangeContainer">
                            <div className="dayOpenContainer">
                                <select name="" id="thursOpens">
                                    <optgroup>
                                        <option value="" label="Opens at" disabled="">Opens at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <svg width="24" height="24" className="icon_svg">
                                    <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                </svg>
                            </div>
                            <div className="dayOpenContainer">
                                <select name="" id="thursCloses">
                                    <optgroup>
                                        <option value="" label="Closes at" disabled="">Closes at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="closedContainer">
                            <input type="checkbox" name="closed" className="closedCheckbox" />
                            <label htmlFor="closed">Closed</label>
                        </div>
                    </div>
                    <div className="dayRowContainer">
                        <div className="dayContainer">
                            <p>Friday: </p>
                        </div>
                        <div className="timeRangeContainer">
                            <div className="dayOpenContainer">
                                <select name="" id="friOpens">
                                    <optgroup>
                                        <option value="" label="Opens at" disabled="">Opens at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <svg width="24" height="24" className="icon_svg">
                                    <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                </svg>
                            </div>
                            <div className="dayOpenContainer">
                                <select name="" id="friCloses">
                                    <optgroup>
                                        <option value="" label="Closes at" disabled="">Closes at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="closedContainer">
                            <input type="checkbox" name="closed" className="closedCheckbox" />
                            <label htmlFor="closed">Closed</label>
                        </div>
                    </div>
                    <div className="dayRowContainer">
                        <div className="dayContainer">
                            <p>Sunday: </p>
                        </div>
                        <div className="timeRangeContainer">
                            <div className="dayOpenContainer">
                                <select name="" id="sunOpens">
                                    <optgroup>
                                        <option value="" label="Opens at" disabled="">Opens at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div>
                                <svg width="24" height="24" className="icon_svg">
                                    <rect width="16" height="2" x="4" y="11" rx="1"></rect>
                                </svg>
                            </div>
                            <div className="dayOpenContainer">
                                <select name="" id="sunCloses">
                                    <optgroup>
                                        <option value="" label="Closes at" disabled="">Closes at</option>
                                        <option value="0" label="12:00 AM">12:00 AM</option>
                                        <option value="15" label="12:15 AM">12:15 AM</option>
                                        <option value="30" label="12:30 AM">12:30 AM</option>
                                        <option value="45" label="12:45 AM">12:45 AM</option>
                                        <option value="60" label="1:00 AM">1:00 AM</option>
                                        <option value="75" label="1:15 AM">1:15 AM</option>
                                        <option value="90" label="1:30 AM">1:30 AM</option>
                                        <option value="105" label="1:45 AM">1:45 AM</option>
                                        <option value="120" label="2:00 AM">2:00 AM</option>
                                        <option value="135" label="2:15 AM">2:15 AM</option>
                                        <option value="150" label="2:30 AM">2:30 AM</option>
                                        <option value="165" label="2:45 AM">2:45 AM</option>
                                        <option value="180" label="3:00 AM">3:00 AM</option>
                                        <option value="195" label="3:15 AM">3:15 AM</option>
                                        <option value="210" label="3:30 AM">3:30 AM</option>
                                        <option value="225" label="3:45 AM">3:45 AM</option>
                                        <option value="240" label="4:00 AM">4:00 AM</option>
                                        <option value="255" label="4:15 AM">4:15 AM</option>
                                        <option value="270" label="4:30 AM">4:30 AM</option>
                                        <option value="285" label="4:45 AM">4:45 AM</option>
                                        <option value="300" label="5:00 AM">5:00 AM</option>
                                        <option value="315" label="5:15 AM">5:15 AM</option>
                                        <option value="330" label="5:30 AM">5:30 AM</option>
                                        <option value="345" label="5:45 AM">5:45 AM</option>
                                        <option value="360" label="6:00 AM">6:00 AM</option>
                                        <option value="375" label="6:15 AM">6:15 AM</option>
                                        <option value="390" label="6:30 AM">6:30 AM</option>
                                        <option value="405" label="6:45 AM">6:45 AM</option>
                                        <option value="420" label="7:00 AM">7:00 AM</option>
                                        <option value="435" label="7:15 AM">7:15 AM</option>
                                        <option value="450" label="7:30 AM">7:30 AM</option>
                                        <option value="465" label="7:45 AM">7:45 AM</option>
                                        <option value="480" label="8:00 AM">8:00 AM</option>
                                        <option value="495" label="8:15 AM">8:15 AM</option>
                                        <option value="510" label="8:30 AM">8:30 AM</option>
                                        <option value="525" label="8:45 AM">8:45 AM</option>
                                        <option value="540" label="9:00 AM">9:00 AM</option>
                                        <option value="555" label="9:15 AM">9:15 AM</option>
                                        <option value="570" label="9:30 AM">9:30 AM</option>
                                        <option value="585" label="9:45 AM">9:45 AM</option>
                                        <option value="600" label="10:00 AM">10:00 AM</option>
                                        <option value="615" label="10:15 AM">10:15 AM</option>
                                        <option value="630" label="10:30 AM">10:30 AM</option>
                                        <option value="645" label="10:45 AM">10:45 AM</option>
                                        <option value="660" label="11:00 AM">11:00 AM</option>
                                        <option value="675" label="11:15 AM">11:15 AM</option>
                                        <option value="690" label="11:30 AM">11:30 AM</option>
                                        <option value="705" label="11:45 AM">11:45 AM</option>
                                        <option value="720" label="12:00 PM">12:00 PM</option>
                                        <option value="735" label="12:15 PM">12:15 PM</option>
                                        <option value="750" label="12:30 PM">12:30 PM</option>
                                        <option value="765" label="12:45 PM">12:45 PM</option>
                                        <option value="780" label="1:00 PM">1:00 PM</option>
                                        <option value="795" label="1:15 PM">1:15 PM</option>
                                        <option value="810" label="1:30 PM">1:30 PM</option>
                                        <option value="825" label="1:45 PM">1:45 PM</option>
                                        <option value="840" label="2:00 PM">2:00 PM</option>
                                        <option value="855" label="2:15 PM">2:15 PM</option>
                                        <option value="870" label="2:30 PM">2:30 PM</option>
                                        <option value="885" label="2:45 PM">2:45 PM</option>
                                        <option value="900" label="3:00 PM">3:00 PM</option>
                                        <option value="915" label="3:15 PM">3:15 PM</option>
                                        <option value="930" label="3:30 PM">3:30 PM</option>
                                        <option value="945" label="3:45 PM">3:45 PM</option>
                                        <option value="960" label="4:00 PM">4:00 PM</option>
                                        <option value="975" label="4:15 PM">4:15 PM</option>
                                        <option value="990" label="4:30 PM">4:30 PM</option>
                                        <option value="1005" label="4:45 PM">4:45 PM</option>
                                        <option value="1020" label="5:00 PM">5:00 PM</option>
                                        <option value="1035" label="5:15 PM">5:15 PM</option>
                                        <option value="1050" label="5:30 PM">5:30 PM</option>
                                        <option value="1065" label="5:45 PM">5:45 PM</option>
                                        <option value="1080" label="6:00 PM">6:00 PM</option>
                                        <option value="1095" label="6:15 PM">6:15 PM</option>
                                        <option value="1110" label="6:30 PM">6:30 PM</option>
                                        <option value="1125" label="6:45 PM">6:45 PM</option>
                                        <option value="1140" label="7:00 PM">7:00 PM</option>
                                        <option value="1155" label="7:15 PM">7:15 PM</option>
                                        <option value="1170" label="7:30 PM">7:30 PM</option>
                                        <option value="1185" label="7:45 PM">7:45 PM</option>
                                        <option value="1200" label="8:00 PM">8:00 PM</option>
                                        <option value="1215" label="8:15 PM">8:15 PM</option>
                                        <option value="1230" label="8:30 PM">8:30 PM</option>
                                        <option value="1245" label="8:45 PM">8:45 PM</option>
                                        <option value="1260" label="9:00 PM">9:00 PM</option>
                                        <option value="1275" label="9:15 PM">9:15 PM</option>
                                        <option value="1290" label="9:30 PM">9:30 PM</option>
                                        <option value="1305" label="9:45 PM">9:45 PM</option>
                                        <option value="1320" label="10:00 PM">10:00 PM</option>
                                        <option value="1335" label="10:15 PM">10:15 PM</option>
                                        <option value="1350" label="10:30 PM">10:30 PM</option>
                                        <option value="1365" label="10:45 PM">10:45 PM</option>
                                        <option value="1380" label="11:00 PM">11:00 PM</option>
                                        <option value="1395" label="11:15 PM">11:15 PM</option>
                                        <option value="1410" label="11:30 PM">11:30 PM</option>
                                        <option value="1425" label="11:45 PM">11:45 PM</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="closedContainer">
                            <input type="checkbox" name="closed" className="closedCheckbox" />
                            <label htmlFor="closed">Closed</label>
                        </div>
                    </div>
                </fieldset>
            </form>
            <div>
                <button type="submit">Save</button>
            </div>
        </div>
        </div>


    )


}
