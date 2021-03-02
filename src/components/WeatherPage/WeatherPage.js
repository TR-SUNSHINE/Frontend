import React, { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { showLocalDate, showLocalTime } from "../../helperFunctions";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import { faSun, faBolt, faWind, faSmog, faCloud, faRainbow, faPooStorm, faCloudSunRain, faCloudSun, faCloudShowersHeavy, faCloudRain, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import ReactGoogleMap from "../ReactGoogleMap/ReactGoogleMap";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
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
            const coords = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const position = await coords;
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

        } catch (error) {
            console.log(error);
            // redirect to error page
        }
    }, []);


    const getWeather = useCallback(async () => {

        try {

            const weatherApi = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily,minutely,alerts&units=metric&appid=${weatherKey}`);

            const currentDate = showLocalDate(weatherApi.data.current.dt);

            setDate(currentDate);
            setWeatherTimes(weatherApi.data.hourly);

        } catch (error) {
            console.log(error);
            setNoResults(true);
        }

    }, [latitude, longitude, weatherKey]);


    useEffect(() => {
        getCoords();
        getWeather();
    }, [getCoords, getWeather]);

    if (noResults) {
        return <Redirect to="/NotFoundPage" />;
    }

    console.log(latitude);
    console.log(longitude);
    console.log(weatherTimes);
    return (

        <Row>
            <Col>
                <h3 className="heading heading--main">Weather today: {date}</h3>

                <Row>
                    {/* map to go here */}
                </Row>


                <WeatherContainer
                    weatherTimes={weatherTimes}
                    selectedWeatherTime={selectedWeatherTime} toggleWeatherTimeSelected={toggleWeatherTimeSelected}
                />

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
            </Col>
        </Row >
    );
};

export default WeatherPage;
