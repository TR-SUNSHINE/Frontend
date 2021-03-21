import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { showLocalDate, showLocalTime, replaceIcons, formatReminderTime } from "../../helperFunctions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import "../WeatherPage/WeatherPage.css";
import "../Button/Button.css";
import GoogleMapWeather from "../Map/GoogleMapWeather";
import { GoogleApiWrapper, Marker } from "google-maps-react";

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

const WeatherPage = (props) => {

    const [coords, setCoords] = useState({ lat: 0, lng: 0 });
    const [weatherTimes, setWeatherTimes] = useState([]);
    const [date, setDate] = useState("");
    const [noResults, setNoResults] = useState(false);
    const [selectedTime, setSelectedTime] = useState({ selectedTime: 0, reminderId: "", reminderTime: 0 });
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

    const myUserId = "e9f9080b-4626-41db-8504-90896859f8e5";
    // const myReminderId = "9af357f1-67cc-4747-a21a-9a74113d7780";

    const postReminder = async (reminderTime) => {

        const formattedReminder = formatReminderTime(reminderTime);

        const newTime = {
            reminderTime: formattedReminder
        };

        const addReminder = await axios.post(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders`, newTime);

        let copySelectedTime = { ...selectedTime };
        copySelectedTime.reminderId = addReminder.data.reminderId;
        copySelectedTime.reminderTime = reminderTime;
        setSelectedTime(copySelectedTime);
    };

    const updateReminder = async (reminderTime) => {

        const formattedReminder = formatReminderTime(reminderTime);

        const updatedTime = {
            reminderTime: formattedReminder
        };

        const updateReminder = await axios.put(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders/${selectedTime.reminderId}`, updatedTime);
        console.log(updateReminder);
        let copySelectedTime = { ...selectedTime };
        copySelectedTime.reminderTime = reminderTime;
        setSelectedTime(copySelectedTime);
    };

    const deleteReminder = async () => {
        const deleteReminder = await axios.delete(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders/${selectedTime.reminderId}`);
        console.log(deleteReminder);
        let copySelectedTime = { ...selectedTime };
        copySelectedTime.selectedTime = 0;
        copySelectedTime.reminderTime = 0;
        copySelectedTime.reminderId = 0;
        setSelectedTime(copySelectedTime);
    };

    const toggleSelectedTime = (weatherId) => {

        let copySelectedTime = { ...selectedTime };

        if (selectedTime.selectedTime !== weatherId) {
            copySelectedTime.selectedTime = weatherId;
            setSelectedTime(copySelectedTime);

        } else {

            deleteReminder();
        }

    };

    const toggleReminder = () => {

        if ((selectedTime.selectedTime !== selectedTime.reminderTime) && !selectedTime.reminderId) {

            postReminder(selectedTime.selectedTime);

        } else if ((selectedTime.selectedTime !== selectedTime.reminderTime) && selectedTime.reminderId) {

            updateReminder(selectedTime.selectedTime);
        }

    };

    const getCoords = useCallback(async () => {

        if (!coords.lat || !coords.long) {

            try {

                if (navigator && navigator.geolocation) {

                    const location = new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });

                    const position = await location;

                    setCoords({ lat: position.coords.latitude, lng: position.coords.longitude });

                } else {

                    // Manchester coordinates

                    setCoords({ lat: 53.4809, lng: -2.2374 });

                }

            } catch (error) {

                console.log("in error weather page");
                if (error.message === "User denied Geolocation") {
                    console.log(error);
                    setCoords({ lat: 53.4809, lng: -2.2374 });
                } else {
                    console.log(error);
                    setNoResults(true);

                }
            }

        }

    }, [coords.lat, coords.long]);


    const getWeather = useCallback(async () => {

        if (coords.lat && coords.lng) {

            try {

                const weatherApi = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&exclude=daily,minutely,alerts&units=metric&appid=${weatherKey}`);

                const currentDate = showLocalDate(weatherApi.data.current.dt);

                const sunrise = weatherApi.data.current.sunrise;
                const sunset = weatherApi.data.current.sunset;

                const weatherArray = weatherApi.data.hourly.slice(0, 24);

                const updatedIconsArray = replaceIcons(weatherArray, sunrise, sunset);

                setDate(currentDate);
                setWeatherTimes(updatedIconsArray);

            } catch (error) {
                console.log(error);
                setNoResults(true);
            }

        }

    }, [coords.lat, coords.lng, weatherKey]);

    useEffect(() => {
        getCoords();
        getWeather();
    }, [getWeather, getCoords]);

    if (noResults) {
        return <Redirect to="/NotFoundPage" />;
    }

    return (
        <>
            <Row>
                <Col>
                    <h3 className="heading heading--main">Weather: {date}</h3>
                    <GoogleMapWeather
                        centerAroundCurrentLocation={false}
                        currentLocation={coords}
                        google={props.google}
                        zoom={13}
                        draggable={false}
                        disableDoubleClickZoom={true}
                    >
                        <Marker lat={coords.lat} lng={coords.long} visible={true} />
                    </GoogleMapWeather>
                </Col>
            </Row >

            <WeatherContainer
                weatherTimes={weatherTimes}
                selectedWeatherTime={selectedTime.selectedTime}
                toggleWeatherTimeSelected={toggleSelectedTime}
                reminderTime={selectedTime.reminderTime}
                showLocalTime={showLocalTime}
            />

            <Row>
                <Col>
                    <div xs={12} className="button__container" >
                        <Button disabled={selectedTime.selectedTime ? false : true} onClick={toggleReminder} variant="single">Set Reminder</Button>
                    </div>
                </Col>
            </Row>
        </>

    );
};

export default GoogleApiWrapper({
    apiKey: googleKey
})(WeatherPage);
