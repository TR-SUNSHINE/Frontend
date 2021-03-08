import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "./RegisterPage.css";
import { Form } from "react-bootstrap";

const RegisterPage = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChangeUserName = event => {
        setUserName(event.target.value);
        let errorsCopy = { ...errors };
        errorsCopy.userName = "";
        setErrors(errorsCopy);
    };

    const handleChangeEmail = event => {
        setEmail(event.target.value);
        let errorsCopy = { ...errors };
        errorsCopy.email = "";
        setErrors(errorsCopy);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
        let errorsCopy = { ...errors };
        errorsCopy.password = "";
        setErrors(errorsCopy);
    };

    const handleChangeConfirmPassword = event => {
        setConfirmPassword(event.target.value);
        let errorsCopy = { ...errors };
        errorsCopy.confirmPassword = "";
        setErrors(errorsCopy);
    };

    const handleSubmit = event => {
        // console.log("handleSubmit", userName, email, password, confirmPassword);

        event.preventDefault();
        if (!userName) {
            let errorsCopy = { ...errors };
            errorsCopy.userName = "Username required";
            setErrors(errorsCopy);
        }
        if (!email) {
            let errorsCopy = { ...errors };
            errorsCopy.email = "Email required";
            setErrors(errorsCopy);
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            let errorsCopy = { ...errors };
            errorsCopy.email = "Email address is invalid";
            setErrors(errorsCopy);
        }

        if (password.length < 6) {
            let errorsCopy = { ...errors };
            errorsCopy.password = "Password needs to be 6 characters or more";
            setErrors(errorsCopy);
        }
        if (confirmPassword !== password) {
            let errorsCopy = { ...errors };
            errorsCopy.confirmPassword = "Passwords do not match";
            setErrors(errorsCopy);
        }

        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    };

    return (
        <Row>
            <Col>

                <h3 className="heading heading--main">Register with Sunshine</h3>

                <Form className="form-register" onSubmit={handleSubmit}>

                    {/* <FormInput labelInput="Name" typeInput="small" nameInput="userName" placeHolderInput="Enter your name" /> */}

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label for="nameInput">Username</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="small"
                                name="userName"
                                value={userName}
                                onChange={event => handleChangeUserName(event)}
                                // onChange={(event) => setUserName(event.target.value)}
                                placeholder="Enter your name" />
                        </Col>
                        <div className="form-error">
                            {errors.userName && <p>{errors.userName} </p>}
                        </div>
                    </Form.Group>



                    {/* <FormInput labelInput="Firstname" typeInput="small" nameInput="userFirstName" placeHolderInput="Enter your first name" /> */}

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label htmlFor="EmailInput">Email</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="small"
                                name="userEmail"
                                value={email}
                                onChange={event => handleChangeEmail(event)}
                                placeholder="Enter your email" />
                        </Col>
                        <div className="form-error">
                            {errors.email && <p>{errors.email} </p>}
                        </div>

                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label htmlFor="PasswordInput">Password</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="password"
                                name="userPassword"
                                value={password}
                                onChange={event => handleChangePassword(event)}
                                placeholder="Enter your password" />
                        </Col>
                        <div className="form-error">
                            {errors.password && <p>{errors.password} </p>}
                        </div>

                    </Form.Group>

                    <Form.Group className="form-row">
                        <Col sm={12}>
                            <Form.Label htmlFor="confirmPasswordInput">Confirm Password</Form.Label>
                        </Col>
                        <Col sm={12}>
                            <Form.Control
                                type="password"
                                name="userConfirmPassword"
                                value={confirmPassword}
                                onChange={event => handleChangeConfirmPassword(event)}
                                placeholder="Confirm your password" />
                        </Col>
                        <div className="form-error">
                            {errors.confirmPassword && <p>{errors.confirmPassword} </p>}
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