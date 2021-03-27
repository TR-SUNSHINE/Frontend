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
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="heading heading--main">My Walks</h3>
                    <div className="walks__table">
                        <div className="title--walk__name">
                            <h5 className="review-stat"> Name</h5>
                        </div>
                        <div className="title--ratings">
                            <div className="review-stat"> Rating</div>
                        </div>
                        <div className="title--delete">
                            <div className="review-stat"> Delete</div>
                        </div>
                    </div>
                    <hr className="line-horizontal" />
                    <Walks
                        walks={walks}
                        history={props.history}
                    >
                    </Walks>
                    <Button variant="addwalk" onClick={() => props.history.push("/AddWalk")}>Add Walk</Button>
                </Col>
            </Row>

        </>
    );
};

export default MyWalks;

