import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./WelcomePage.css";
import "../Button/Button.css";

const Welcome = () => {


    return (
        <Row>
            <Col>
                <Row>
                    <Col >
                        <h3 className="heading heading--main">Welcome to Sunshine</h3>
                        <Image src="./images/welcomeSunshine.jfif" fluid />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <div className="button__container button__container--left" >
                            <Button variant="welcome"><Link className="button--link" to="/RegisterPage">Register</Link></Button>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={6}>
                        <div className="button__container button__container--right" >
                            <Button variant="welcome"><Link className="button--link" to="/loginPage">Login</Link></Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Welcome;

