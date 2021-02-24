import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { faSun, faBolt, faWind, faSmog, faCloud, faRainbow, faPooStorm, faCloudSunRain, faCloudSun, faCloudShowersHeavy, faCloudRain, faSnowflake } from "@fortawesome/free-solid-svg-icons";
import Weather from "../Weather/Weather";
import WeatherContainer from "../WeatherContainer/WeatherContainer";
import "./WeatherPage.css";

const WeatherPage = () => {

    const [weatherTimes, setWeatherTimes] = useState([
        { id: "001", time: "07:00", temperature: "18°", description: "sunny", icon: faSun },
        { id: "002", time: "08:00", temperature: "19°", description: "lightening", icon: faBolt },
        { id: "003", time: "09:00", temperature: "19°", description: "windy", icon: faWind },
        { id: "004", time: "10:00", temperature: "17°", description: "smoggy", icon: faSmog },
        { id: "005", time: "11:00", temperature: "16°", description: "cloudy", icon: faCloud },
        { id: "006", time: "12:00", temperature: "16°", description: "rain and sun", icon: faRainbow },
        { id: "007", time: "13:00", temperature: "12°", description: "stormy", icon: faPooStorm },
        { id: "008", time: "14:00", temperature: "12°", description: "sunny with showers", icon: faCloudSunRain },
        { id: "009", time: "15:00", temperature: "14°", description: "partly sunny", icon: faCloudSun },
        { id: "010", time: "16:00", temperature: "14°", description: "heavy showers", icon: faCloudShowersHeavy },
        { id: "011", time: "17:00", temperature: "13°", description: "raining", icon: faCloudRain },
        { id: "012", time: "18:00", temperature: "13°", description: "snowing", icon: faSnowflake }
    ]);

    const [selectedWeatherTime, setSelectedWeatherTime] = useState("");
    const [reminder, setReminder] = useState({});

    const toggleWeatherTimeSelected = (weatherId) => {

        if (selectedWeatherTime !== weatherId) {
            setSelectedWeatherTime(weatherId);
        } else {
            setSelectedWeatherTime("");
            setReminder({});
        }

    };

    const toggleReminder = () => {

        if (selectedWeatherTime) {
            let selected = weatherTimes.filter(weather => weather.id === selectedWeatherTime);
            setReminder(selected[0]);
        }

    };

    console.log(selectedWeatherTime);
    console.log(reminder);
    console.log(reminder.time);
    return (

        <Row>
            <Col>
                <h3 className="heading heading--main">Name's Sunshine Today</h3>

                <Row>
                    <Col>
                        <p> Map component here</p>
                        <div className="frame--weather">
                            <img className="img--map" src="./images/Manchester.png" alt="map"></img>
                        </div>
                    </Col>
                </Row>


                <WeatherContainer weatherTimes={weatherTimes} selectedWeatherTime={selectedWeatherTime} toggleWeatherTimeSelected={toggleWeatherTimeSelected} />

                <Row>
                    <Col>
                        <div className="reminder__container">
                            <p hidden={reminder.time ? false : true}>Reminder set for your walk at {`${reminder.time}.`}</p>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--left" >
                            <Button disabled={selectedWeatherTime ? false : true} onClick={toggleReminder} variant="accessible">Set Reminder</Button>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--right" >
                            <Button href="/" variant="accessible">My Walks</Button>
                        </div>
                    </Col>
                </Row>

            </Col>
        </Row >
    );
};

export default WeatherPage;
