import React, { useRef } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { showLocalTime } from "../../helperFunctions";
import "./Weather.css";

const Weather = ({ weatherTimes, selectedWeatherTime, toggleWeatherTimeSelected }) => {
    const scrollRef = useRef();

    const handleScroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollLeft -= 175;
        } else {
            scrollRef.current.scrollLeft += 175;
        }
    };

    return (
        <>
            <Col>
                <Button onClick={() => handleScroll("left")
                }>
                    {"<"}
                </Button>
            </Col>
            <Col
                className="individual__weather__container"
                ref={scrollRef}
            >
                {weatherTimes.map((weather) => {
                    return (
                        <Button
                            variant="weather-display"
                            key={weather.dt}
                            className={selectedWeatherTime === weather.dt ? "weather selected" : "weather"}
                            onClick={(event) => { toggleWeatherTimeSelected(weather.dt); }}
                        >
                            <div>{showLocalTime(weather.dt)}</div>
                            <Row>
                                <Col>temp:</Col>
                                <Col>{weather.temp}ºC</Col>
                            </Row>
                            <Row>
                                <Col>feels:</Col>
                                <Col>{weather.feels_like}ºC</Col>
                            </Row>
                            <Row>
                                <Col>{weather.weather[0].description}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                                </Col>
                            </Row>
                            <p className="weather--description">{weather.description}</p>
                        </Button>
                    );
                })}
            </Col>
            <Col>
                <Button onClick={() => handleScroll("right")}>
                    >
            </Button>
            </Col>
        </>
    );

};

export default Weather;


