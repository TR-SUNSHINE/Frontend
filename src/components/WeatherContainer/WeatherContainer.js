import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Weather from "../Weather/Weather";

const WeatherContainer = ({ weatherTimes, selectedWeatherTime, toggleWeatherTimeSelected }) => {
    return (
        <Row>
            <Col>
                <div className="weather__container">
                    <h4 className="heading heading--secondary">Best walk times</h4>
                    <p> Click on a time then set your walk time reminder for today.</p>
                    <Weather weatherTimes={weatherTimes} selectedWeatherTime={selectedWeatherTime} toggleWeatherTimeSelected={toggleWeatherTimeSelected} />
                </div>
            </Col>
        </Row>
    );
};

export default WeatherContainer;
