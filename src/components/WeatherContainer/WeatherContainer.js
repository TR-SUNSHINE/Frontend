import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Weather from "../Weather/Weather";
import "./WeatherContainer.css";

const WeatherContainer = ({ weatherTimes, selectedWeatherTime, toggleWeatherTimeSelected, reminderTime, showLocalTime }) => {

    return (
        <>
            <Row>
                <Col className="weather__container">
                    <h4 className="heading heading--secondary">Weather: next 24 hours</h4>
                    <p hidden={reminderTime}> Click on a time to set a reminder for today.</p>
                    <p className="reminder" hidden={!reminderTime}>
                        Reminder set for your walk at {showLocalTime(reminderTime)}
                    </p>
                    <p hidden={!reminderTime} className="reminder--info">
                        Click on the button to delete the reminder</p>
                </Col>
            </Row>
            <Row>
                <Weather weatherTimes={weatherTimes} selectedWeatherTime={selectedWeatherTime} toggleWeatherTimeSelected={toggleWeatherTimeSelected} />
            </Row>
        </>
    );
};

export default WeatherContainer;
