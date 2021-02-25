import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./LoginPage.css";
import { Form } from "react-bootstrap";


const LoginPage = () => {

    const [userName, setName] = useState("");
    const [userFirstName, setFirstName] = useState("");
    const [userEmail, setEmail] = useState("");

    const handleClick = () => {
        console.log("onclick", userName, userFirstName, userEmail);
    };

    return (
        <Row>
            <Col>

                <h3 class="heading heading--main">Login with Sunshine</h3>

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
                                placeholder="Enter your name" />
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


                    <Row>
                        <Col xs={12} >
                            <div className="button__container--center">
                                <Button onClick={handleClick} >Login</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>


            </Col>

        </Row >
    );
};

export default LoginPage;