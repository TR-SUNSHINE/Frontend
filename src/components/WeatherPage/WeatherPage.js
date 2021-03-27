import React, { useState, useEffect, useCallback } from "react";
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
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

    const getReminders = async () => {

        try {

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

                console.log(reminders);

            }
        } catch (error) {
            props.history.push({
                pathname: "/ErrorPage",
                state: { message: "Unable to load reminders" }
            });
        }



    };

    const postReminder = async (reminderTime) => {

        const formattedReminder = formatReminderTime(reminderTime);

        const newTime = {
            reminderTime: formattedReminder
        };

        try {

            const addReminder = await axios.post(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${props.details.userId}/reminders`, newTime);

            console.log(addReminder);

            let copyDetails = { ...props.details };
            copyDetails.reminderId = addReminder.data.reminderId;
            copyDetails.reminderTime = reminderTime;
            props.setDetails(copyDetails);

        } catch (error) {
            props.history.push({
                pathname: "/ErrorPage",
                state: { message: "Unable to set a reminder" }
            });

        }
    };


    const deleteReminder = async () => {

        try {

            const deleted = await axios.delete(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${props.details.userId}/reminders/${props.details.reminderId}`);

            console.log(deleted);

            let copyDetails = { ...props.details };
            copyDetails.selectedTime = 0;
            copyDetails.reminderTime = 0;
            copyDetails.reminderId = 0;
            props.setDetails(copyDetails);

        } catch (error) {
            props.history.push({
                pathname: "/ErrorPage",
                state: { message: "Unable to delete reminder" }
            });
        }
    };

    const toggleSelectedTime = (weatherId) => {

        let copyDetails = { ...props.details };

        if (props.details.selectedTime !== weatherId) {
            copyDetails.selectedTime = weatherId;
            props.setDetails(copyDetails);

        } else {

            copyDetails.selectedTime = 0;
            props.setDetails(copyDetails);
        }

    };

    const addReminder = () => {

        postReminder(props.details.selectedTime);

    };

    const getCoords = useCallback(async () => {

        if (!coords.lat || !coords.long) {

            try {

                if (navigator && navigator.geolocation) {

                    const location = new Promise((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(resolve, reject);
                    });

                    const position = await location;

                    console.log(position);

                    setCoords({ lat: position.coords.latitude, lng: position.coords.longitude });

                } else {

                    // Manchester coordinates

                    setCoords({ lat: 53.4809, lng: -2.2374 });

                }

            } catch (error) {

                if (error.message === "User denied Geolocation") {
                    setCoords({ lat: 53.4809, lng: -2.2374 });
                } else {
                    props.history.push({
                        pathname: "/ErrorPage",
                        state: { message: "Unable get your coordinates" }
                    });

                }
            }

        }

    }, [coords.lat, coords.long, props.history]);


    const getWeather = useCallback(async () => {

        if (coords.lat && coords.lng) {

            try {

                const weatherApi = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&exclude=daily,minutely,alerts&units=metric&appid=${weatherKey}`);

                console.log(weatherApi.data);
                const currentDate = showLocalDate(weatherApi.data.current.dt);

                const sunrise = weatherApi.data.current.sunrise;
                const sunset = weatherApi.data.current.sunset;

                const weatherArray = weatherApi.data.hourly.slice(0, 24);

                const updatedIconsArray = replaceIcons(weatherArray, sunrise, sunset);

                setDate(currentDate);
                setWeatherTimes(updatedIconsArray);

            } catch (error) {
                props.history.push({
                    pathname: "/ErrorPage",
                    state: { message: "Unable to get weather information" }
                });
            }

        }

    }, [coords.lat, coords.lng, weatherKey, props.history]);

    useEffect(() => {
        getReminders();
    }, []);

    useEffect(() => {
        getCoords();
        getWeather();
    }, [getWeather, getCoords]);

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
                        reminderId={props.details.reminderId}
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
                    <div xs={12} hidden={props.details.reminderTime ? true : false} className="button__container" >
                        <Button disabled={props.details.selectedTime ? false : true} onClick={addReminder} variant="single">Set Reminder</Button>
                    </div>
                    <div xs={12} hidden={props.details.reminderTime ? false : true} className="button__container" >
                        <Button onClick={deleteReminder} variant="single">Delete</Button>
                    </div>
                </Col>
            </Row>
        </>

    );
};

export default GoogleApiWrapper({
    apiKey: googleKey
})(WeatherPage);
