import "./IndividualWalk.css";
import Button from "react-bootstrap/Button";
import RatingsBar from "../RatingsBar/RatingsBar";
import Graph from "../Graph/Graph";
import GoogleMap from "../Map/GoogleMap";
import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../Button/Button.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const IndividualWalk = (props, walkId) => {
    const [routeMarkers, setRouteMarkers] = useState(
        []
    ); //Default state
    const [avgRatingPerMonth, setAvgRatingPerMonth] = useState(
        {
            Jan: 1,
            Feb: 3,
            Mar: 4,
            Apr: 4,
            May: 5,
            Jun: 1,
            Jul: 5,
            Aug: 3,
            Sep: 5,
            Oct: 4,
            Nov: 5,
            Dec: 2
        }
    ); //Default state
    const addRating = () => {
        //Add routeMarkers to DB here
        console.log("insert rating to DB");
    };

    //Temporarily hardcoding this untill walkId is passed through props from previous page.
    walkId = "3aa59a4c-8328-4bed-bd81-aac377f1611f";
    useEffect(() => {
        //A function to get the tasks
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/${walkId}`)
            .then(
                //if the request is successful
                response => setRouteMarkers(response.data[0].routes)
            )
            .catch(
                //if the request returns an error
                error => console.log(error));
        /*
                axios
                    .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walk/rating/${walkId}`)
                    .then(
                        //if the request is successful
                        response => setAvgRatingPerMonth(response.data[0].avgRating)
                    )
                    .catch(
                        //if the request returns an error
                        error => console.log(error));
         */
    },
        //How often should I run this function
        []
    );
    let lat = 0;
    let lng = 0;
    if (routeMarkers.length < 1) {
        //Default Manchester
        lat = 53.47783;
        lng = -2.24317;
    }
    else {
        //From State
        const middleItem = routeMarkers[routeMarkers.length / 2 | 0];
        lat = middleItem.lat;
        lng = middleItem.lng;
    }
    return (
        <>
            <Row>
                <Col>
                    <h3 className="heading heading--main">Individual Walk</h3>
                    <h4 className="heading heading--secondary">Top Rated Walk</h4>
                    <GoogleMap
                        centerAroundCurrentLocation={false}
                        lat={lat}
                        lng={lng}
                        google={props.google}
                        zoom={13}
                        draggable={false}
                        disableDoubleClickZoom={true}
                    >
                        {routeMarkers.map((coords, index) => {
                            if (index === 0 || index === routeMarkers.length - 1) {
                                return <Marker key={`marker-${index}`} position={coords} />;
                            }
                            return null;
                        })}
                        <Polyline
                            visible={true}
                            path={routeMarkers}
                            strokeColor="#0000ff"
                            strokeOpacity={0.8}
                            strokeWeight={6}
                            editable={false}
                            draggable={false}
                        />
                    </GoogleMap>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="heading heading--secondary">Walk Statistics</h4>
                    <Graph data={avgRatingPerMonth} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="addRating__container">
                        <h4 className="heading heading--secondary">Rate Walk</h4>
                        <RatingsBar />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <div className="button__container button__container--left" >
                        <Button variant="double"><Link className="button--link" to="/MyWalksPage">My Walks</Link></Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} >
                    <div className="button__container button__container--right" >
                        <Button variant="double" onClick={addRating}><Link className="button--link" to="/MyWalksPage">Rate Walk</Link></Button>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default GoogleApiWrapper({
    apiKey: API_KEY
})(IndividualWalk);