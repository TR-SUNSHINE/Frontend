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
import Button from "react-bootstrap/Button";

function Walk({ walk }) {
    const today = new Date();
    const deleteWalk = () => {

        axios.delete(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/`, { data: { Id: walk.id } })
            .then(response => {
                console.log(response);
                window.location.reload(false);
            })
            .catch(
                error => console.log(error)
            );
    };

    return (
        <>
            <div className="container--walk__name">
                <h5 className="walk__name">
                    <Link className={walk.dayOf === today.getDate().toString() &&
                        walk.monthOf === (today.getMonth() + 1).toString() &&
                        walk.yearOf === today.getFullYear().toString()
                        ? "text--newtask" : "text--hyperlink"}
                        to={`/IndividualWalk/${walk.id}`}
                        id={walk.id}
                        text={walk.walkName}
                        key={walk.id}
                        walkaverating={walk.aveRating}
                        userid={walk.userID}
                        walktime={walk.walktime}
                        yearof={walk.yearOf}
                        monthof={walk.monthOf}
                        dayof={walk.dayOf}
                    >
                        {walk.walkName}
                    </Link>
                </h5>
            </div>
            <div className="container--ratings">
                <RatingsBar value={walk.aveRating} disabled={true} />
            </div>

            <div className="container--button__delete">
                <Button onClick={deleteWalk} variant="delete">x</Button>
            </div>
        </>
    );
}
export default Walk;