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

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        if (!userName.trim()) {
            errors.name = "Name required";
        }
        if (!email) {
            errors.email = "Email required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid";
        } if (!password.length < 6) {
            errors.password = "Password needs to be 6 characters or more";
        }
        if (!confirmPassword !== password) {
            errors.ConfirmPassword = "Passwords do not match";
        }
    };
    // const handleClick = () => {
    //     console.log("onclick", userName, email, password, confirmPassword);
    // };
    console.log("onclick", userName, email, password, confirmPassword);

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
                                onChange={(event) => setUserName(event.target.value)}
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
                                value={email}
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
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password" />
                        </Col>
                        <div className="form-error">
                            {errors.password && <p>{errors.password} </p>}
                        </div>

                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label for="confirmPasswordInput">Confirm Password</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="password"
                                name="userConfirmPassword"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                placeholder="Confirm your password" />
                        </Col>
                        <div className="form-error">
                            {errors.confirmPassword && <p>{errors.userConfirmPassword} </p>}
                        </div>

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