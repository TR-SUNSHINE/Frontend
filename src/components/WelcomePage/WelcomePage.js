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
                <h3 class="heading heading--main">Welcome to Sunshine</h3>
                <div class="frame--sunshine">
                    <img class="img--sunshine" src="./images/welcomeSunshine.jfif" alt=""></img>
                </div>
                <Row>
                    {/* n.b. I'm still converting inside here to the react-bootstrap versions of columns: https://react-bootstrap.github.io/layout/grid/   */}
                    {/* <div class="col-sm-2"></div> */}
                    {/* <div class="col-sm-4 one"> */}
                    <div class="col-sm-4 one">
                        <Button>Register</Button>
                    </div>
                    <div class="col-sm-4 two">
                        <Button>Login</Button>
                    </div>
                    {/* <div class="col-sm-2"></div> */}
                </Row>
            </Col>
        </Row>
    );
};

export default Welcome;

