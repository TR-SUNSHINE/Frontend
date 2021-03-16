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
            scrollRef.current.scrollLeft -= 300;
        } else {
            scrollRef.current.scrollLeft += 300;
        }
    };

    return (
        <>
            <Col className="individual__weather__button__container" xs={1}>
                <Button variant="pointer" onClick={() => handleScroll("left")
                }>
                    {"<"}
                </Button>
            </Col>
            <Col
                className="individual__weather__container"
                ref={scrollRef}
                xs={10}
            >
                {weatherTimes.map((weather) => {
                    return (
                        <Button
                            variant="weather-display"
                            key={weather.dt}
                            className={selectedWeatherTime === weather.dt ? "weather selected" : "weather"}
                            onClick={(event) => { toggleWeatherTimeSelected(weather.dt); }}
                        >
                            <div className="weather__time">{showLocalTime(weather.dt)}</div>
                            <Row>
                                <Col xs={12}>
                                    <span className="temp">temp:</span>
                                    <span className="temp">{weather.temp}ºC</span>
                                </Col>
                                <Col xs={12}>
                                    <span className="temp">feels:</span>
                                    <span className="temp">{weather.feels_like}ºC</span>
                                </Col>

                                <Col xs={12}>
                                    <Image className="weather__icon" src={weather.weather[0].icon === "50d" ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : `./images/weather_icons_dovora_interactive_2/SVG/${weather.weather[0].icon}.svg`} />
                                </Col>
                                <Col className="weather--description" xs={12}>{weather.weather[0].description}</Col>
                            </Row>
                        </Button>
                    );
                })}
            </Col>
            <Col className="individual__weather__button__container" xs={1}>
                <Button variant="pointer" onClick={() => handleScroll("right")}>
                    {">"}
                </Button>
            </Col>
        </>
    );

};

export default Weather;


