import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

const Logout = (props) => {

    const removeFromLocalStorage = () => localStorage.removeItem("userId");

    useEffect(() => {
        removeFromLocalStorage();
    }, []);

    return (
        <Row>
            <Col>
                <h3 className="heading heading--main">Logged Out</h3>

                <Row>
                    <Col>

                        <div className="container d-flex justify-content-center align-items-center">
                            <div className="card p-3">
                                <img className="img--sunshine" src="./images/welcomeSunshine.jfif" alt="sunshine"></img>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="button__container" >
                            <Button variant="single" onClick={() => props.history.push("/LoginPage")}>Login</Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Logout;
