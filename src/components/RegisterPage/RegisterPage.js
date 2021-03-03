import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "./RegisterPage.css";
import { Form } from "react-bootstrap";
import FormInput from "../FormInput/FormInput";

const RegisterPage = () => {

    const [userName, setName] = useState("");
    const [userFirstName, setFirstName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPass] = useState("");
    const [userConfirmPassword, setConfirmPass] = useState("");

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        if (!userName.trim()) {
            errors.userName = "Name required";
        }
        if (!userEmail.trim()) {
            errors.userEmail = "Email required";
        }
        if (!userPassword.length.length < 6) {
            errors.userPassword = "Password needs to be 6 characters or more";
        }
        if (!userConfirmPassword !== userPassword) {
            errors.userConfirmPassword = "Passwords do not match";
        }
    };
    const handleClick = () => {
        console.log("onclick", userName, userEmail, userPassword, userConfirmPassword);
    };

    return (
        <Row>
            <Col>

                <h3 class="heading heading--main">Register with Sunshine</h3>

                <Form className="form-register" onSubmit={handleSubmit}>

                    {/* <FormInput labelInput="Name" typeInput="small" nameInput="userName" placeHolderInput="Enter your name" /> */}

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label for="nameInput">Name</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="small"
                                name="userName"
                                value={userName}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Enter your name" />
                        </Col>
                        <div className="form-error">
                            {errors.userName && <p>{errors.userName} </p>}
                        </div>
                    </Form.Group>



                    {/* <FormInput labelInput="Firstname" typeInput="small" nameInput="userFirstName" placeHolderInput="Enter your first name" /> */}

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label for="EmailInput">Email</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="email"
                                name="userEmail"
                                value={userEmail}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter your email" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label for="PasswordInput">Password</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="password"
                                name="userPassword"
                                value={userPassword}
                                onChange={(event) => setPass(event.target.value)}
                                placeholder="Enter your password" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label for="confirmPasswordInput">Confirm Password</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="password"
                                name="userConfirmPassword"
                                value={userConfirmPassword}
                                onChange={(event) => setConfirmPass(event.target.value)}
                                placeholder="Confirm your password" />
                        </Col>

                    </Form.Group>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <div className="button__container button__container--left" >
                                <Button variant="accessible"><Link className="button--link" to="WelcomePage">Back</Link></Button>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={6}>
                            <div className="button__container button__container--right" >
                                <Button variant="accessible" type="submit" >
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