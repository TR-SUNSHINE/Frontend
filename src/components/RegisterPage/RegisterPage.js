import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./RegisterPage.css";
import { Form } from "react-bootstrap";

const RegisterPage = () => {

    return (
        <Row>
            <Col>
                <h3 class="heading heading--main">Register with Sunshine</h3>
                <Form className="form-register">

                    <Form.Group controlId="UserName" className="form-row">
                        <Col sm={3}>
                            <Form.Label for="nameInput">Name</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="small" placeholder="Enter your Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="UserFirstName" className="form-row">
                        <Col sm={3}>
                            <Form.Label for="firstNameInput">First name</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="small" placeholder="Enter your first name" />
                        </Col>
                    </Form.Group>


                    <Form.Group controlId="password" className="form-row">
                        <Col sm={3}>
                            <Form.Label for="PasswordInput">Password</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="confirmPassword" className="form-row">
                        <Col sm={3}>
                            <Form.Label for="confirmPasswordInput">Password</Form.Label>
                        </Col>
                        <Col sm={9}>
                            <Form.Control type="password" placeholder="confirm your password" />
                        </Col>
                    </Form.Group>

                    <Button>Register</Button>

                </Form>
            </Col>

        </Row >
    );
};

export default RegisterPage;