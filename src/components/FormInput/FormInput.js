import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./FormInput.css";
import { Form } from "react-bootstrap";

function FormInput({ labelText, typeInput }) {

    console.log(labelText);

    return (
        <section>
            < h1 > {labelText, typeInput} </h1 >
            <Form.Group className="form-row">
                <Col sm={3}>
                    <Form.Label for="nameInput">labelText</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type={typeInput}
                        name="userName"
                        //value={userName}
                        //onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your Name" />
                </Col>
            </Form.Group>

        </section>
    );
}
export default FormInput;
