import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../../index.css";
import "./NotFoundPage.css";

const NotFoundPage = (props) => {
    return (

        <Row>
            <Col>
                <h3 className="heading heading--main">Page Not Found</h3>

                <Row>
                    <Col>
                        <Image className="image--notfound" src="./images/ErrorPage.png" alt="404 Page NotFound" fluid />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <div className="button__container button__container--centre" >
                            <Button variant="single" onClick={() => { props.history.push("/"); }}>Home</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row >
    );
};

export default NotFoundPage;