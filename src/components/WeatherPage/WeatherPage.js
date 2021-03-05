import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { showLocalDate, showLocalTime, replaceIcons } from "../../helperFunctions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import MapContainer from "../Map/MapContainer";
import "./WeatherPage.css";
import "../Button/Button.css";

const WeatherPage = () => {

    // n.b. latitude & longitude hardcoded - will need to move to App & be fetched from backend?
    // need to move api call to App - or will reload every time page reloads?
    const [latitude, setLatitude] = useState(53.46265);
    const [longitude, setLongitude] = useState(-2.24909);
    const [weatherTimes, setWeatherTimes] = useState([]);
    const [date, setDate] = useState("");
    const [noResults, setNoResults] = useState(false);
    const [selectedWeatherTime, setSelectedWeatherTime] = useState(0);
    const [reminder, setReminder] = useState({ time: 0, walk: "" });
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
    const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const toggleWeatherTimeSelected = (weatherId) => {

        if (selectedWeatherTime !== weatherId) {
            setSelectedWeatherTime(weatherId);
        } else {
            setSelectedWeatherTime(0);
            setReminder({ time: 0, walk: "" });
        }

    };

    const toggleReminder = () => {

        if (selectedWeatherTime) {
            setReminder({ time: selectedWeatherTime, walk: "" });
        }

    };

    const getCoords = useCallback(async () => {

        try {

            if (navigator && navigator.geolocation) {

                const location = new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const position = await location;
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);

            } else {

                const Manchester = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Manchester,GB&appid=${weatherKey}`);

                setLatitude(Manchester.data.coord.lat);
                setLongitude(Manchester.data.coord.lon);

                // hard-coded Manchester coordinates
                /*
                setLatitude(53.4809);
                setLongitude(-2.2374);
                */
            }

        } catch (error) {
            console.log(error);
            // redirect to error page
        }
    }, []);


    const getWeather = useCallback(async () => {

        try {

            const weatherApi = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily,minutely,alerts&units=metric&appid=${weatherKey}`);

            const currentDate = showLocalDate(weatherApi.data.current.dt);

            const sunrise = weatherApi.data.current.sunrise;
            const sunset = weatherApi.data.current.sunset;

            const weatherArray = weatherApi.data.hourly.slice(0, 24);

            const updatedIconsArray = replaceIcons(weatherArray, sunrise, sunset);
            console.log(updatedIconsArray);
            setDate(currentDate);
            setWeatherTimes(updatedIconsArray);

        } catch (error) {
            console.log(error);
            //AG: temporarily removed this for testing. If you are reading this then I forgot to revert it back.
            // setNoResults(true);
        }

    }, [latitude, longitude, weatherKey]);


    useEffect(() => {
        getCoords();
        getWeather();
    }, [getCoords, getWeather]);

    if (noResults) {
        return <Redirect to="/NotFoundPage" />;
    }

    console.log(weatherTimes);
    return (
        <>
            <Row>
                <Col>
                    <h3 className="heading heading--main">Weather today: {date}</h3>
                    <MapContainer />
                    <WeatherContainer
                        weatherTimes={weatherTimes}
                        selectedWeatherTime={selectedWeatherTime} toggleWeatherTimeSelected={toggleWeatherTimeSelected}
                    />

                </Col>
            </Row >



            <Row>
                <Col xs={12}>
                    <div className="reminder__container">
                        <p hidden={reminder.time ? false : true}>Reminder set for your walk at {showLocalTime(reminder.time)}</p>
                    </div>
                </Col>

                <Col>
                    <div xs={12} className="button__container button__container--center" >
                        <Button disabled={selectedWeatherTime ? false : true} onClick={toggleReminder} variant="accessible">Set Reminder</Button>
                    </div>
                </Col>
            </Row>
        </>

    );
};

export default WeatherPage;
