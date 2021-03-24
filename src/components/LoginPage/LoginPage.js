import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "../LoginPage/LoginPage.css";
import { Form } from "react-bootstrap";
import axios from "axios";

const LoginPage = (props) => {

    const [details, setDetails] = useState({ email: "", id: "", userName: "", emailError: "", loginError: "" });

    const handleChange = (event) => {

        const copyDetails = { ...details };
        setDetails(copyDetails);

        if (event.target.name === "email") {
            copyDetails.emailError = "";
            copyDetails.loginError = "";
            copyDetails.email = event.target.value;

            setDetails(copyDetails);
        }
    };

    const handleSubmit = event => {
        console.log("handleSubmit --> ", details);
        event.preventDefault();
        console.log("email2:", details.email);

        const copyDetails = { ...details };

        if (!/\S+@\S+\.\S+/.test(details.email)) {
            copyDetails.emailError = "invalid email format";
        }

        if (copyDetails.emailError) {
            setDetails(copyDetails);
        } else {

            const email = details.email;
            axios
                .get(`https://wolne3lm7h.execute-api.eu-west-2.amazonaws.com/dev/users/${email}/user`)
                // .then(response => setDetails(response.data))
                .then((response) => {
                    setDetails(response.data);
                    if (response.data.length === 1) {

                        console.log("user Id= ", response.data[0].id);
                        const copyProps = { ...props.details };
                        copyProps.userId = response.data[0].id;
                        props.setDetails(copyProps);
                        localStorage.setItem("userId", copyProps.userId);
                        props.history.push("/WeatherPage");

                    } else {
                        details.loginError = "Sorry! Unable to login";
                        setDetails(copyDetails);
                        console.log("copyDetails:", copyDetails);
                        console.log("details:", details);
                        // props.history.push("/ErrorPage");
                    };
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        copyDetails.loginError = "Error when submittig details - Unable to login";
                        setDetails(copyDetails);
                    };
                });
        };
    };

    return (
        <Row>
            <Col>

                <h3 className="heading heading--main">Login to Sunshine</h3>

                <p className="logged" hidden={!localStorage.getItem("userId")}>
                    You are already logged in !
                </p>

                <Form className="form-register" onSubmit={handleSubmit}>
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
                    <Form.Group>
                        <Row>
                            <div className="form-lerror">
                                {details.loginError && <p>{details.loginError} </p>}
                            </div>
                        </Row>
                    </Form.Group>
                    <Row>
                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--left">
                                <Button variant="double" onClick={() => props.history.push("/WelcomePage")}>Back</Button>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--right">
                                <Button disabled={details.email && !localStorage.getItem("userId") ? false : true} variant="double" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );

};


export default LoginPage;