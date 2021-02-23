import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
                            <div className="review-stat"> Walk Rating</div>
                        </div>
                        <hr className="line-horizontal" />
                        <div className="mt-1 d-flex justify-content-between align-items-center">
                            <Walks></Walks>
                            <RatingsBar></RatingsBar>
                        </div>
                    </div>
                </div>
                <Row>
                    <div className="button__container button__container--center">
                        <Button>Create New Walk</Button>
                    </div>
                </Row>
            </Col>
        </Row>
    );
};

export default MyWalks;

