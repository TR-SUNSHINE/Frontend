import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../../index.css";
import "./NotFoundPage.css";

const NotFoundPage = (props) => {
    return (

        <Row>
            <Col>
                <h3 className="heading heading--main">Page Not Found</h3>

                <Row>
                    <Col>

                        <div className="container d-flex justify-content-center align-items-center">
                            <div className="card p-3">
                                <img className="img--sunshine" src="./images/ErrorPage.png" alt="404 Page NotFound"></img>
                            </div>
                        </div>
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

export default NotFoundPage;