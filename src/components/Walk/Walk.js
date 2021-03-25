import "../../index.css";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./Walk.css";
import { Link } from "react-router-dom";
import "../Button/Button.css";
import RatingsBar from "../RatingsBar/RatingsBar";


function Walk({ walk }) {
    return (
        <Row>
            <Col xs={6}>
                <h5 className="review-stat">
                    <Link className="text--hyperlink" to={`/IndividualWalk/${walk.id}`}
                        id={walk.Id}
                        text={walk.WalkName}
                        key={walk.id}
                        walkaverating={walk.AveRating}
                        userid={walk.UserID}
                    >
                        {walk.walkName}
                    </Link>

                </h5>
            </Col>
            <Col xs={6}>
                <RatingsBar value={walk.aveRating} disabled={true} />
            </Col>
        </Row>
    );
}

export default Walk;
