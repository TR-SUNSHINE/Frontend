import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "../RegisterPage/RegisterPage.css";
import "../Button/Button.css";
import { Form } from "react-bootstrap";
import axios from "axios";

const RegisterPage = (props) => {

    const [details, setDetails] = useState({ userName: "", userNameError: "", email: "", emailError: "" });

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
        };
    };

    const handleSubmit = event => {
        console.log("handleSubmit", details);
        const userDetails = {
            "email": details.email,
            "userName": details.userName
        };
        event.preventDefault();

        const copyDetails = { ...details };

        if (details.userName.length === 0) {
            copyDetails.emailError = "invalid username";
        }
        if (!/\S+@\S+\.\S+/.test(details.email)) {
            copyDetails.emailError = "invalid email format";
        }

        if (copyDetails.emailError || copyDetails.userNameError) {
            setDetails(copyDetails);
        }
        else {
            copyDetails.userName = "";
            copyDetails.email = "";

            setDetails(copyDetails);
            console.log("insert user to DB: ", userDetails);
            const email = details.email;

            axios
                .post(`https://wolne3lm7h.execute-api.eu-west-2.amazonaws.com/dev/user/${email}/user`, userDetails)
                .then((response) => {
                    setDetails(response.data);
                    console.log("response_data: ", response.data);
                    if (response.data.length === 1) {
                        // console.log("status: ", response.status);
                        // console.log("data: ", response.data);
                        // console.log("Created userId= ", response.data[0].id);
                        const copyProps = { ...props.details };
                        copyProps.userId = response.data[0].id;
                        props.setDetails(copyProps);
                        localStorage.setItem("userId", copyProps.userId);
                        props.history.push("/WeatherPage");

                    } else {
                        details.loginError = "Sorry! Unable to login";
                        setDetails(copyDetails);
                        details.loginError = "Sorry! Unable to login";
                        console.log("copyDetails:", copyDetails);
                        console.log("details:", details);
                    };
                })
                .catch(error => console.log(error));

        };
    };
    return (
        <Row>
            <Col>

                <h3 className="heading heading--main">Register with Sunshine</h3>
                <p className="logged" hidden={!localStorage.getItem("userId")}>
                    You are already logged in!
                </p>


                <Form className="form-register" onSubmit={handleSubmit}>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label className="form--label" htmlFor="nameInput">Username</Form.Label>
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


                    <Row>
                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--left" >
                                <Button variant="double"><Link className="button--link" to="/WelcomePage">Back</Link></Button>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--right" >
                                <Button variant="double"
                                    disabled={details.userName && details.email && !localStorage.getItem("userId") ? false : true} type="submit" >
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