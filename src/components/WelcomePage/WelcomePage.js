import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./WelcomePage.css";

const Welcome = () => {


    return (
        // <div class="row">
        <Row>
            <Col>
                <h3 className="heading heading--main">Welcome to Sunshine</h3>
                <div className="frame--sunshine">
                    <img className="img--sunshine" src="./images/welcomeSunshine.jfif" alt=""></img>
                </div>
                <Row>
                    {/* n.b. I'm still converting inside here to the react-bootstrap versions of columns: https://react-bootstrap.github.io/layout/grid/   */}
                    {/* <div class="col-sm-2"></div> */}
                    {/* <div class="col-sm-4 one"> */}
                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--left" >
                            <Button>Register</Button>
                        </div>
                    </Col>

                    <Col xs={12} sm={12} md={6}>
                        <div className="button__container button__container--right" >
                            <Button>Login</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Welcome;

