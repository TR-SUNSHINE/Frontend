import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Walks from "../Walks/Walks";
import "../../index.css";
import "./MyWalksPage.css";
import "../Button/Button.css";
import axios from "axios";
import { useState, useEffect } from "react";

const MyWalks = (props) => {
    const [walks, setWalks] = useState([]);

    useEffect(() => {
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/user/${props.details.userId}`)
            .then(response => {
                console.log(response);
                if (!response.data) {
                    setWalks([]);
                } else {
                    setWalks(response.data);
                }
            }
            )
            .catch(error => props.history.push({
                pathname: "/ErrorPage",
                state: { message: "Unable get your walks" }
            }));
    }, []);

    return (
        <Row>
            <Col>
                <Row>
                    <Col xs={12}>
                        <h3 className="heading heading--main">My Walks</h3>
                        <div className="container d-flex justify-content-center align-items-center">
                            <div className="card p-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="review-stat">Walk Name</h5>
                                    <div className="review-stat"> Average Rating</div>
                                </div>
                                <hr className="line-horizontal" />
                                <div className="mt-1 d-flex justify-content-between align-items-center">
                                    <Walks
                                        walks={walks}
                                    >
                                    </Walks>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <div className="button__container" >
                            <Button variant="single" onClick={() => props.history.push("/AddWalk")}>Create Walk</Button>
                        </div>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
};

export default MyWalks;

