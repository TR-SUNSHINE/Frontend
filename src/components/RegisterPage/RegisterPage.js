import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./RegisterPage.css";
import { Form } from "react-bootstrap";


const RegisterPage = () => {

    const [userName, setName] = useState("");
    const [userFirstName, setFirstName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPass] = useState("");
    const [userConfirmPassword, setConfirmPass] = useState("");

    const handleClick = () => {
        console.log("onclick", userName, userFirstName, userEmail, userPassword, userConfirmPassword);
    };
    // check if user exist already
    // check password +confirma password are the same
    // add user to user database

    return (
        <Row>
            <Col>
                <h3 class="heading heading--main">Register with Sunshine</h3>
                <Form className="form-register">

                    <Form.Group className="form-row">
                        <Col sm={3}>
                            <Form.Label for="nameInput">Name</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="small"
                                name="userName"
                                value={userName}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Enter your Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={3}>
                            <Form.Label for="firstNameInput">First name</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="small"
                                name="userFirstName"
                                value={userFirstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                placeholder="Enter your first name" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={3}>
                            <Form.Label for="EmailInput">Email</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="small"
                                name="userEmail"
                                value={userEmail}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Enter your email" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={3}>
                            <Form.Label for="PasswordInput">Password</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="userPassword"
                                value={userPassword}
                                onChange={(event) => setPass(event.target.value)}
                                placeholder="Enter your password" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={3}>
                            <Form.Label for="confirmPasswordInput">Confirm Password</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control
                                type="password"
                                name="userConfirmPassword"
                                value={userConfirmPassword}
                                onChange={(event) => setConfirmPass(event.target.value)}
                                placeholder="Confirm your password" />
                        </Col>
                    </Form.Group>

                    <Row>
                        <Col xs={12} >
                            <div className="button__container--center">
                                <Button onClick={handleClick} >Register</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>

                {/* <Row>
                        <Col xs={12} >
                            <div className="button__container--center">
                                <Button  >Register</Button>
                            </div>
                        </Col>
                    </Row> */}





            </Col>

        </Row >
    );
};

export default RegisterPage;