import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.css";
import "./Walks.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../Button/Button.css";



const Walks = (props, userId) => {
    userId = "3bd4d097-8193-11eb-b706-062d232c43b8";
    const walkName = "";
    const walkId = "";
    const [walks, setWalks] = useState([]);

    useEffect(() => {
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/user/${userId}`)
            .then(response => setWalks(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <Row>
            <Col>
                <h5 className="review-stat" ><Link className="text--hyperlink" to="/IndividualWalk">{walkName}</Link></h5>
            </Col>
        </Row>
    );
};

export default Walks;
