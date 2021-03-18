import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "../LoginPage/LoginPage.css";
import { Form } from "react-bootstrap";

const LoginPage = () => {

    const [details, setDetails] = useState({ email: "", emailError: "" });

    const handleChange = (event) => {

        const copyDetails = { ...details };

        if (event.target.name === "email") {

            copyDetails.emailError = "";
            copyDetails.email = event.target.value;

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

        if (copyDetails.emailError) {
            setDetails(copyDetails);
        else {
            
        }
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
                                <Button disabled={details.email && details.password ? false : true} variant="double" type="submit" >
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