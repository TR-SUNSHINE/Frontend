import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Weather = ({ weatherTimes, selectedWeatherTime, toggleWeatherTimeSelected }) => {
    return (
        <Row>
            <Col>
                <div className="individual__weather__container">
                    {weatherTimes.map((weather) => {
                        return (
                            <div className={selectedWeatherTime === weather.id ? "weather selected" : "weather"} onClick={(event) => { toggleWeatherTimeSelected(weather.id); }}>
                                <div>{weather.time}</div>
                                <FontAwesomeIcon icon={weather.icon} />
                                <div>{weather.temperature}</div>
                                <div>{weather.description}</div>
                            </div>
                        );
                    })}
                </div>
            </Col>
        </Row>
    );
};

export default Weather;