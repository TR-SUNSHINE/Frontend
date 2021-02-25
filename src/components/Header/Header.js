import "./Header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import NaviBar from "../NaviBar/NaviBar";
import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <Row>
                <Row>
                    <NaviBar />
                </Row>
                <Col>
                </Col>
                <Col>
                </Col>
                <Col>
                    <Image
                        src="./images/welcomeSunshine.jfif"
                        alt="Info"
                        style={{
                            width: 100,
                        }} fluid
                    />
                </Col>
            </Row >
        );
    }
};


