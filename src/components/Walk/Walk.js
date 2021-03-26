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
    const today = new Date();
    return (
        <Row>
            <Col xs={6}>
                <h5 className="review-stat">
<<<<<<< HEAD
                    <Link className={walk.dayOf === today.getDate().toString() &&
                        walk.monthOf === (today.getMonth() + 1).toString() &&
                        walk.yearOf === today.getFullYear().toString()
                        ? "text--newtask" : "text--hyperlink"}
                        to={`/IndividualWalk/${walk.id}`}
                        id={walk.id}
                        text={walk.walkName}
                        key={walk.id}
                        walkAveRating={walk.aveRating}
                        userID={walk.userID}
                        walktime={walk.walktime}
                        yearOf={walk.yearOf}
                        monthOf={walk.monthOf}
                        dayOf={walk.dayOf}
=======
                    <Link className="text--hyperlink" to={`/IndividualWalk/${walk.id}`}
                        id={walk.Id}
                        text={walk.WalkName}
                        key={walk.id}
                        walkaverating={walk.AveRating}
                        userid={walk.UserID}
>>>>>>> main
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