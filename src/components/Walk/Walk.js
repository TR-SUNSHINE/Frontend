import "../../index.css";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./Walk.css";
import { Link } from "react-router-dom";
import "../Button/Button.css";
import RatingsBar from "../RatingsBar/RatingsBar";
import axios from "axios";

function Walk({ walk }) {
   const today = new Date();
   const deleteWalk = () => {

   axios.delete(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/`, { data: { Id: walk.id } })
          .then(response => {
              window.location.reload(false);
          })
          .catch(
              error => console.log(error)
          );
  };
  
    return (
        <Row>
            <Col xs={6}>
                <h5 className="review-stat">
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
                    >
                        {walk.walkName}
                    </Link>
                </h5>
            </Col>
            <Col xs={6}>
                <RatingsBar value={walk.aveRating} disabled={true} />
            </Col>
            <Col xs={6}>
                <Button onClick={deleteWalk}>Delete</Button>
            </Col>
        </Row>
    );
}
export default Walk; 