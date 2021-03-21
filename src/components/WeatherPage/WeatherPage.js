import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { showLocalDate, showLocalTime, replaceIcons } from "../../helperFunctions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import "../WeatherPage/WeatherPage.css";
import "../Button/Button.css";
import GoogleMapWeather from "../Map/GoogleMapWeather";
import { GoogleApiWrapper, Marker } from "google-maps-react";

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

const WeatherPage = ({ google }) => {

    const [coords, setCoords] = useState({ lat: 0, lng: 0 });
    const [weatherTimes, setWeatherTimes] = useState([]);
    const [date, setDate] = useState("");
    const [noResults, setNoResults] = useState(false);
    // const [selectedWeatherTime, setSelectedWeatherTime] = useState(0);
    const [selectedTimeReminder, setSelectedTimeReminder] = useState({ seletedTime: 0, reminderId: "", reminderTime: 0 });
    // const [reminder, setReminder] = useState({ time: 0, walk: "" });
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

    const toggleWeatherTimeSelected = (weatherId) => {

        let copySelectedTimeReminder = { ...selectedTimeReminder };

        if (selectedTimeReminder.time !== weatherId) {
            copySelectedTimeReminder.time = weatherId;

        } else {
            copySelectedTimeReminder.time = 0;
            copySelectedTimeReminder.reminderTime = 0;
            // copySelectedTimeReminder.reminder = false;
        }

        setSelectedTimeReminder(copySelectedTimeReminder);

    };

    const toggleReminder = () => {

        let copySelectedTimeReminder = { ...selectedTimeReminder };

        if (selectedTimeReminder.time) {
            // copySelectedTimeReminder.reminder = true;
            copySelectedTimeReminder.reminderTime = selectedTimeReminder.time;
        }

        setSelectedTimeReminder(copySelectedTimeReminder);
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
                        google={google}
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
                selectedWeatherTime={selectedTimeReminder.time}
                toggleWeatherTimeSelected={toggleWeatherTimeSelected}
                // reminder={selectedTimeReminder.reminder}
                reminderTime={selectedTimeReminder.reminderTime}
                showLocalTime={showLocalTime}
            />

            <Row>
                <Col>
                    <div xs={12} className="button__container" >
                        <Button disabled={selectedTimeReminder.time ? false : true} onClick={toggleReminder} variant="single">Set Reminder</Button>
                    </div>
                </Col>
            </Row>
        </>

    );
};

export default GoogleApiWrapper({
    apiKey: googleKey
})(WeatherPage);
