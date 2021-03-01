import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./LoginPage.css";
import { Form } from "react-bootstrap";


const LoginPage = () => {
    // const [users, setTasks] = useState([
    //     { userFirstaName: 'Myriam', userName: "Thursch", password: "12345", id: '001' },
    //     { userFirstaName: 'John', userName: "Smith", password: "12345", id: '002' },
    //     { userFirstaName: 'Joan', userName: "Prijs", password: "12345", id: '003' },
    //     { userFirstaName: 'Ana', userName: "Saunders", password: "12345", id: '004' },
    // ])

    const [userName, setName] = useState("");
    const [userFirstName, setFirstName] = useState("");
    const [userPassword, setPassword] = useState("");


    const handleClick = () => {
        console.log("onclick", userName, userFirstName, userPassword);
    };

    return (
        <Row>
            <Col xs={12} sm={12} md={6}>

                <h3 class="heading heading--main">Login with Sunshine</h3>

                <Form className="form-xs={12} sm={12} md={6}register">
                    <Form.Group className="form-row">
                        <Col sm={4}>
                            <Form.Label for="nameInput">Name</Form.Label>
                        </Col>
                        <Col sm={8}>
                            <Form.Control
                                type="small"
                                name="userName"
                                value={userName}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Enter your name" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row" sm={8}>
                        <Col sm={4}>
                            <Form.Label for="firstNameInput">First name</Form.Label>
                        </Col>
                        <Col sm={8}>
                            <Form.Control
                                type="small"
                                name="userFirstName"
                                value={userFirstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                placeholder="Enter your first name" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={4}>
                            <Form.Label for="EmailInput">Password</Form.Label>
                        </Col>
                        <Col sm={8}>
                            <Form.Control
                                type="password"
                                name="userPassword"
                                value={userPassword}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Enter your password" />
                        </Col>
                    </Form.Group>


                    <Row>
                        <Col xs={12} >
                            <div className="button__container--center">
                                <Button type="submit" onClick={handleClick} >Login</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>


            </Col>

        </Row >
    );
};

export default LoginPage;