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

const MyWalks = ({ details, history }) => {
    const [walks, setWalks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/user/${details.userId}`)
            .then(response => {
                console.log(response);
                if (!response.data) {
                    setWalks([]);
                    setLoading(false);
                } else {
                    setWalks(response.data);
                    setLoading(false);
                }
            })
            .catch(error => history.push({
                pathname: "/ErrorPage",
                state: { message: "Unable get your walks" }
            }));
    }, []);

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 data-testid="title" className="heading heading--main">My Walks</h3>
                    <div className="walks__table">
                        <div className="title--walk__name">
                            <h5 className="review-stat" data-testid="name"> Name</h5>
                        </div>
                        <div className="title--ratings">
                            <div className="review-stat" data-testid="rating"> Rating</div>
                        </div>
                        <div className="title--delete">
                            <div className="review-stat" data-testid="delete"> Delete</div>
                        </div>
                    </div>
                    <hr className="line-horizontal" />
                    {loading ? <p data-testid="loading">...loading</p> :
                        <>
                            <Walks
                                walks={walks}
                            >
                            </Walks>
                            <Button variant="addwalk" onClick={() => history.push("/AddWalk")}>Add Walk</Button>
                        </>
                    }
                </Col>
            </Row>

        </>
    );
};

export default MyWalks;

