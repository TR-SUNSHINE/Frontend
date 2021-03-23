import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { showLocalDate, showLocalTime, replaceIcons, formatReminderTime, formatLocalDateTime } from "../../helperFunctions";
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
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

    const getReminders = async () => {
        console.log(props.details.userId);
        const reminders = await axios.get(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${props.details.userId}/reminders`);

        if (reminders.data.length) {

            const latestReminder = reminders.data[reminders.data.length - 1];
            const latestReminderTime = formatLocalDateTime(latestReminder.reminderTime);
            const timeNow = formatReminderTime(Math.floor(Date.now() / 1000)) + "Z";
            const latestReminderTimeUnix = Date.parse(latestReminderTime) / 1000;

            if (latestReminderTime > timeNow) {
                const copyDetails = { ...props.details };
                copyDetails.reminderTime = latestReminderTimeUnix;
                copyDetails.reminderId = latestReminder.reminderId;
                props.setDetails(copyDetails);

            } else {
                console.log("reminder in past");
            }

        }

        console.log(reminders);

    };

    const postReminder = async (reminderTime) => {

        const formattedReminder = formatReminderTime(reminderTime);

        const newTime = {
            reminderTime: formattedReminder
        };

        const addReminder = await axios.post(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${props.details.userId}/reminders`, newTime);

        let copyDetails = { ...props.details };
        copyDetails.reminderId = addReminder.data.reminderId;
        copyDetails.reminderTime = reminderTime;
        props.setDetails(copyDetails);
    };

    const updateReminder = async (reminderTime) => {

        const formattedReminder = formatReminderTime(reminderTime);

        const updatedTime = {
            reminderTime: formattedReminder
        };

        await axios.put(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${props.details.userId}/reminders/${props.details.reminderId}`, updatedTime);

        let copyDetails = { ...props.details };
        copyDetails.reminderTime = reminderTime;
        props.setDetails(copyDetails);
    };

    const deleteReminder = async () => {

        await axios.delete(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${props.details.userId}/reminders/${props.details.reminderId}`);

        let copyDetails = { ...props.details };
        copyDetails.selectedTime = 0;
        copyDetails.reminderTime = 0;
        copyDetails.reminderId = 0;
        props.setDetails(copyDetails);
    };

    const toggleSelectedTime = (weatherId) => {

        let copyDetails = { ...props.details };

        if (props.details.selectedTime !== weatherId) {
            copyDetails.selectedTime = weatherId;
            props.setDetails(copyDetails);

        } else {

            deleteReminder();
        }

    };

    const toggleReminder = () => {

        if ((props.details.selectedTime !== props.details.reminderTime) && !props.details.reminderId) {

            postReminder(props.details.selectedTime);

        } else if ((props.details.selectedTime !== props.details.reminderTime) && props.details.reminderId) {

            updateReminder(props.details.selectedTime);
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
        getReminders();
    }, []);

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
                selectedWeatherTime={props.details.selectedTime}
                toggleWeatherTimeSelected={toggleSelectedTime}
                reminderTime={props.details.reminderTime}
                showLocalTime={showLocalTime}
            />

            <Row>
                <Col>
                    <div xs={12} className="button__container" >
                        <Button disabled={props.details.selectedTime ? false : true} onClick={toggleReminder} variant="single">Set Reminder</Button>
                    </div>
                </Col>
            </Row>
        </>

    );
};

export default GoogleApiWrapper({
    apiKey: googleKey
})(WeatherPage);
