import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Weather from "../Weather/Weather";

const WeatherContainer = ({ weatherTimes, selectedWeatherTime, toggleWeatherTimeSelected, reminder, reminderTime, showLocalTime }) => {

    return (
        <>
            <Row>
                <Col className="weather__container">
                    <h4 className="heading heading--secondary">Weather: next 24 hours</h4>
                    <p hidden={reminderTime}> Click on a time to set a reminder for today.</p>
                    <p hidden={!reminderTime}>Reminder set for your walk at {showLocalTime(reminderTime)}</p>
                </Col>
            </Row>
            <Row>
                <Weather weatherTimes={weatherTimes} selectedWeatherTime={selectedWeatherTime} toggleWeatherTimeSelected={toggleWeatherTimeSelected} />
            </Row>
        </>
    );
};

export default WeatherContainer;
