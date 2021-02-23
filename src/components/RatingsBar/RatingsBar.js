import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import "../../index.css";
import "./RatingsBar.css";

const RatingsBar = () => {
    return (
        <Row>
            <Col>
                <div className="small-ratings"><FontAwesomeIcon className="rating-color" icon={faStar} /><FontAwesomeIcon className="rating-color" icon={faStar} /><FontAwesomeIcon className="rating-color" icon={faStar} /><FontAwesomeIcon className="rating-color" icon={faStar} /><FontAwesomeIcon className="rating-color" icon={faStar} />
                </div>
            </Col>
        </Row>
    );
};

export default RatingsBar;
