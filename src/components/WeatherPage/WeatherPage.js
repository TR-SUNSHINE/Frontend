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
import GoogleMap from "../Map/GoogleMap";
import { GoogleApiWrapper, Marker } from "google-maps-react";

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

const WeatherPage = ({ google }) => {

    const [coords, setCoords] = useState({ lat: 0, long: 0 });
    const [weatherTimes, setWeatherTimes] = useState([]);
    const [date, setDate] = useState("");
    const [noResults, setNoResults] = useState(false);
    const [selectedWeatherTime, setSelectedWeatherTime] = useState(0);
    const [reminder, setReminder] = useState({ time: 0, walk: "" });
    const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

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

                setCoords({ lat: position.coords.latitude, long: position.coords.longitude });

            } else {

                // Manchester coordinates

                setCoords({ lat: 53.4809, long: -2.2374 });

            }

        } catch (error) {
            console.log(error);
            setNoResults(true);
        }

    }, []);


    const getWeather = useCallback(async () => {

        if (coords.lat && coords.long) {

            try {

                const weatherApi = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.long}&exclude=daily,minutely,alerts&units=metric&appid=${weatherKey}`);

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

    }, [coords.lat, coords.long, weatherKey]);

    useEffect(() => {
        getCoords();
        getWeather();
    }, [getWeather, getCoords]);

    if (noResults) {
        return <Redirect to="/NotFoundPage" />;
    }

    console.log("in TestWeather", coords);
    return (
        <>
            <Row>
                <Col>
                    <h3 className="heading heading--main">Weather today: {date}</h3>
                    <GoogleMap
                        centerAroundCurrentLocation={false}
                        lat={coords.lat}
                        lng={coords.long}
                        google={google}
                        zoom={13}
                        draggable={false}
                        disableDoubleClickZoom={true}
                    >
                        <Marker lat={coords.lat} lng={coords.long} visible={true} />
                    </GoogleMap>
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

export default GoogleApiWrapper({
    apiKey: googleKey
})(WeatherPage);
