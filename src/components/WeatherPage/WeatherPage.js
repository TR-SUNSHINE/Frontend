import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";


const WeatherPage = () => {
    return (
        <Row>
            <Col>
                <h3 className="heading heading--main">Name's Sunshine Today</h3>

                <Row>
                    <Col>
                        <p> Alun's map component here</p>
                        <div class="frame--weather">
                            <img class="img--map" src="./images/Manchester.png" alt="map"></img>
                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col>
                        <div class="weather__container">
                            <h4 class="heading heading--secondary">Best walk times</h4>

                            <div class="individual__weather__container">
                                <div class="weather">
                                    <div>01:00</div>
                                    <FontAwesomeIcon icon={faSun} />
                                    <div>18°</div>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--left" >
                            <Button variant="accessible">Set Reminder</Button>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--right" >
                            <Button variant="accessible">My Walks</Button>
                        </div>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
};

export default WeatherPage;
