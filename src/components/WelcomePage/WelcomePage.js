import React from "react";
import { Link } from "react-router-dom";
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
                <h3 className="heading heading--main">Welcome to Sunshine</h3>
                <div className="frame--sunshine">
                    <img className="img--sunshine" src="./images/welcomeSunshine.jfif" alt=""></img>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--left" >
                            <Button variant="accessible"><Link className="button--link" to="/register">Register</Link></Button>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--right" >
                            <Button variant="accessible"><Link className="button--link" to="/login">Login</Link></Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Welcome;

