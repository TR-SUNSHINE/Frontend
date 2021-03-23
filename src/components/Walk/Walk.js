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
            <Col>
                <h5 className="review-stat">


                    <Link className="text--hyperlink" to={`/IndividualWalk/${walk.id}`}

                        id={walk.id}
                        text={walk.walkName}
                        key={walk.id}
                        walkAveRating={walk.aveRating}
                        userID={walk.userID}
                    >
                        {walk.walkName}
                    </Link>

                </h5>


            </Col>
            <Col>
                <RatingsBar value={walk.aveRating} disabled={true} />
            </Col>
        </Row>
    );
}

export default Walk;
