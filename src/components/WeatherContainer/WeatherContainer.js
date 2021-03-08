import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Weather from "../Weather/Weather";

const WeatherContainer = ({ weatherTimes, selectedWeatherTime, toggleWeatherTimeSelected }) => {

    return (
        <>
            <Row>
                <Col className="weather__container">
                    <h4 className="heading heading--secondary">Weather for the next 24 hours</h4>
                    <p> Click on a time then set your walk time reminder for today.</p>
                </Col>
            </Row>
            <Row>
                <Weather weatherTimes={weatherTimes} selectedWeatherTime={selectedWeatherTime} toggleWeatherTimeSelected={toggleWeatherTimeSelected} />
            </Row>
        </>
    );
};

export default WeatherContainer;
