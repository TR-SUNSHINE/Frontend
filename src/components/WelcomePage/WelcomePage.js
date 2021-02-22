import React from "react";
import Button from "react-bootstrap/Button";
import "../../index.css";
import "./WelcomePage.css";

const Welcome = () => {


    return (
        <div class="row">
            <div class="col">
                <h2 class="heading heading--main">Welcome to Sunshine</h2>
                <div class="frame--sunshine">
                    <img class="img--sunshine" src="./images/welcomeSunshine.jfif" alt=""></img>
                </div>
                <div class="row">
                    <div class="col-sm-2"></div>
                    <div class="col-sm-4">
                        <Button>Register</Button>
                    </div>
                    <div class="col-sm-4">
                        <Button>Login</Button>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;

