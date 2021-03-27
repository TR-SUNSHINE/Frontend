import React, { useEffect } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "../../index.css";

const Logout = (props) => {

    const removeFromLocalStorage = () => localStorage.removeItem("userId");

    useEffect(() => {
        removeFromLocalStorage();
    }, []);

    return (
        // <Row>
        //     <Col>
        //         <h3 className="heading heading--main">Logged Out</h3>\
        <>
            <Row>
                <Col>
                    <h3 className="heading heading--main">Logged Out</h3>
                    <Image src="./images/welcomeSunshine.jfif" fluid />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className="button__container" >
                        <Button variant="single" onClick={() => props.history.push("/LoginPage")}>Login</Button>
                    </div>
                </Col>
            </Row>

        </>
    );
};

export default Logout;
