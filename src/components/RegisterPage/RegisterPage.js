import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "../RegisterPage/RegisterPage.css";
import "../Button/Button.css";
import { Form } from "react-bootstrap";
// import { DetailsContext } from "../Context/Context";
import axios from "axios";

const RegisterPage = () => {

    const [details, setDetails] = useState({ userName: "", userNameError: "", email: "", emailError: "" });
    // const [context, setContext] = useContext(DetailsContext);

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

        if (!/\S+@\S+\.\S+/.test(details.email)) {
            copyDetails.emailError = "invalid email format";
        }

        if (copyDetails.emailError) {
            setDetails(copyDetails);
        }
        else {
            copyDetails.userName = "";
            copyDetails.email = "";

            setDetails(copyDetails);

            // const email = details.email;
            console.log("insert user to DB: ", userDetails);
            axios
                .post(`https://wolne3lm7h.execute-api.eu-west-2.amazonaws.com/dev/user/{userDetails}/user`, userDetails)
                .then(response => {
                    console.log("status: ", response.status);
                    console.log("data: ", response.data);
                    window.location.href = "/WeatherPage/";
                })
                .catch(error => console.log(error));

            // axios
            //     .post(`https://wolne3lm7h.execute-api.eu-west-2.amazonaws.com/dev/user/${newUser}/user`, newUser)
            //     .then(response => {
            //         axios.get(`https://wolne3lm7h.execute-api.eu-west-2.amazonaws.com/dev/users/${email}/user`)
            //             .then(response => {
            //                 setDetails(response.data);
            //                 setContext(response.data[0].id);
            //             });

            //     })
            //     .catch(error => {
            //         if (error.response) {
            //             console.log(error.response.data);
            //             copyDetails.loginError = "Error when submittig details - Unable to register";
            //             setDetails(copyDetails);
            //         };
            //     });
        };
    };
    return (
        <Row>
            <Col>

                <h3 className="heading heading--main">Register with Sunshine</h3>

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
                                    disabled={details.userName && details.email ? false : true} type="submit" >
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