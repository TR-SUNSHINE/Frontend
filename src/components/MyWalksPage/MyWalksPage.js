import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../../index.css";
import "./MyWalksPage.css";
import Walks from "../Walks/Walks";
import RatingsBar from "../RatingsBar/RatingsBar";

const MyWalks = () => {
    return (
        <Row>
            <Col>
                <h3 className="heading heading--main">My Walks</h3>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="card p-3">
                        <div className="mt-5 d-flex justify-content-between align-items-center">
                            <h5 className="review-stat">Walk Name</h5>
                            <div className="review-stat"> Walk Ave Rating</div>
                        </div>
                        <hr className="line-horizontal" />
                        <div className="mt-1 d-flex justify-content-between align-items-center">
                            <Walks></Walks>
                            <RatingsBar stars={4} disabled={true} />
                        </div>
                    </div>
                </div>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <div className="button__container button__container--centre" >
                            <Button variant="accessible"><Link className="button--link" to="/AddWalk">Create Walk</Link></Button>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default MyWalks;

