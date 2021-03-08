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
                <h3 className="heading heading--main">Welcome to Sunshine</h3>
                <Image src="./images/welcomeSunshine.jfif" fluid />
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--left" >
<<<<<<< HEAD
                            <Button variant="accessible">
                                <Link className="button--link" to="/register">
                                    Register
                                </Link>
                            </Button>
=======
                            <Button variant="accessible"><Link className="button--link" to="/RegisterPage">Register</Link></Button>
>>>>>>> main
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--right" >
<<<<<<< HEAD
                            <Button variant="accessible">
                                <Link className="button--link" to="/login">
                                    Login
                                </Link>
                            </Button>
=======
                            {/* link to correct logiin LoginPage */}
                            <Button variant="accessible"><Link className="button--link" to="/loginPage">Login</Link></Button>
>>>>>>> main
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Welcome;

