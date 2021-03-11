import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "../RegisterPage/RegisterPage.css";
import { Form } from "react-bootstrap";

const RegisterPage = () => {

    const [details, setDetails] = useState({ userName: "", userNameError: "", email: "", emailError: "", password: "", passwordError: "", confirmPassword: "", confirmPasswordError: "" });


    const handleChange = (event) => {

        const copyDetails = { ...details };

        if (event.target.name === "userName") {

            copyDetails.userNameError = "";
            copyDetails.userName = event.target.value;

            setDetails(copyDetails);

        } else if (event.target.name === "email") {

            copyDetails.emailError = "";
            copyDetails.email = event.target.value;

            setDetails(copyDetails);

        } else if (event.target.name === "password") {

            copyDetails.passwordError = "";
            copyDetails.password = event.target.value;
            setDetails(copyDetails);

        } else {
            copyDetails.confirmPasswordError = "";
            copyDetails.confirmPassword = event.target.value;
            setDetails(copyDetails);
        }

    };

    const handleSubmit = event => {
        console.log("handleSubmit", details);

        event.preventDefault();

        const copyDetails = { ...details };

        if (!/\S+@\S+\.\S+/.test(details.email)) {
            copyDetails.emailError = "invalid email format";
        }

        if (details.password.length < 6) {
            copyDetails.passwordError = "Password needs to be 6 characters or more";
        }

        if (details.confirmPassword !== details.password) {
            copyDetails.confirmPasswordError = "Passwords do not match";
        } else if (details.confirmPassword === details.password) {
            copyDetails.confirmPasswordError = "";
        }

        if (copyDetails.emailError || copyDetails.passwordError || copyDetails.confirmPasswordError) {

            setDetails(copyDetails);

        } else {

            copyDetails.userName = "";
            copyDetails.email = "";
            copyDetails.password = "";
            copyDetails.confirmPassword = "";

            setDetails(copyDetails);
            console.log("get details & send off to the backend.");
        }

    };

    console.log(details);
    return (
        <Row>
            <Col>

                <h3 className="heading heading--main">Register with Sunshine</h3>

                <Form className="form-register" onSubmit={handleSubmit}>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label htmlFor="nameInput">Username</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="small"
                                name="userName"
                                value={details.userName}
                                onChange={handleChange}
                                placeholder="Enter your name" />
                        </Col>
                        <div className="form-error">
                            {details.userNameError && <p>{details.userNameError} </p>}
                        </div>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label htmlFor="EmailInput">Email</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="small"
                                name="email"
                                value={details.email}
                                onChange={handleChange}
                                placeholder="Enter your email" />
                        </Col>
                        <div className="form-error">
                            {details.emailError && <p>{details.emailError} </p>}
                        </div>

                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label htmlFor="PasswordInput">Password</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="password"
                                name="password"
                                value={details.password}
                                onChange={handleChange}
                                placeholder="Enter your password" />
                        </Col>
                        <div className="form-error">
                            {details.passwordError && <p>{details.passwordError} </p>}
                        </div>

                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label htmlFor="confirmPasswordInput">Confirm Password</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={details.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password" />
                        </Col>
                        <div className="form-error">
                            {details.confirmPasswordError && <p>{details.confirmPasswordError} </p>}
                        </div>
                    </Form.Group>
                    <Form.Group className="form-row">
                        <Form.Check
                            name="consent"
                            type="checkbox"
                            label="I consent to share my location" />
                    </Form.Group>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <div className="button__container button__container--left" >
                                <Button variant="accessible"><Link className="button--link" to="WelcomePage">Back</Link></Button>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6}>
                            <div className="button__container button__container--right" >
                                <Button disabled={details.userName && details.email && details.password && details.confirmPassword ? false : true} variant="accessible" type="submit" >
                                    Register
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>


            </Col>

        </Row >
    );
};

export default RegisterPage;