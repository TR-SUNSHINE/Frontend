import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./FormInput.css";
import { Form } from "react-bootstrap";

function FormInput({ labelInput, typeInput, nameInput, placeHolderInput }) {

    console.log(labelInput, typeInput, nameInput, placeHolderInput);

    const [text, setInput] = useState("");

    return (
        <section>
            <Form.Group className="form-row">
                <Col sm={3}>
                    <Form.Label for="nameInput">{labelInput}</Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control
                        type={typeInput}
                        name={nameInput}
                        value={text}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder={placeHolderInput} />
                </Col>
            </Form.Group>

        </section>
    );
}
export default FormInput;
