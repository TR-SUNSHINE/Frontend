import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "../../index.css";
import "./ErrorPage.css";

const ErrorPage = (props) => {
    return (

        <Row>
            <Col>
                <Row>
                    <Col>
                        <h3 className="heading heading--main">Error</h3>
                        <Image src="./images/welcomeSunshine.jfif" fluid />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {props.location.state.message}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <div className="button__container button__container--centre" >
                            <Button variant="accessible" onClick={() => { props.history.push("/"); }}>Return to Home</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ErrorPage;