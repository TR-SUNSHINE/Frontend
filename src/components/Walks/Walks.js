import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./Walks.css";
import { Link } from "react-router-dom";
import "../Button/Button.css";

const Walks = () => {

    // const ratings = ["Manchester Museum", "Queens Park", "Trafford Centre"];
    // const list = [];

    // ratings.forEach((rating) => { list.push(<li>{rating}</li>); });
    return (
        <Row>
            <Col>
                <h5 className="review-stat" ><Link className="text--hyperlink" to="/IndividualWalk">Manchester Museum</Link></h5>
            </Col>
        </Row>
    );
};

export default Walks;
