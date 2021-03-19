import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "../LoginPage/LoginPage.css";
import { Form } from "react-bootstrap";
import axios from "axios";

const LoginPage = () => {

    const [details, setDetails] = useState({ email: "", emailError: "", id: "", userName: "" });

    const handleChange = (event) => {

        const copyDetails = { ...details };

        if (event.target.name === "email") {

            copyDetails.emailError = "";
            copyDetails.id = "";
            copyDetails.email = event.target.value;

            setDetails(copyDetails);
        }
    };

    const handleSubmit = event => {
        console.log("handleSubmit --> ", details);

        event.preventDefault();

        const copyDetails = { ...details };

        if (!/\S+@\S+\.\S+/.test(details.email)) {
            copyDetails.emailError = "invalid email format";
        }

        if (copyDetails.emailError) {
            setDetails(copyDetails);
        } else {

            const email = details.email;
            const response = "";
            axios
                .get(`https://wolne3lm7h.execute-api.eu-west-2.amazonaws.com/dev/users/${email}/user`)
                // .then(response => setDetails(response.data))
                .then((response) => {
                    setDetails(response.data);
                    console.log("status:", response.status);
                    console.log("details:", details);
                    


                })
                .catch(error => console.log("error: ", error));
            console.log("response --> ", response);

        }
    };

    return (
        <Row>
            <Col>

                <h3 className="heading heading--main">Login to Sunshine</h3>

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

                    <Row>
                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--left" >
                                <Button variant="double"><Link className="button--link" to="WelcomePage">Back</Link></Button>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--right" >
                                <Button disabled={details.email ? false : true} variant="double" type="submit" >
                                    Login
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row >
    );
};

export default LoginPage;