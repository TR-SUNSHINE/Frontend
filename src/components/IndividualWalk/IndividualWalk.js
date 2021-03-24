import "./IndividualWalk.css";
import { Redirect } from "react-router-dom";
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
    walkId = "3aa59a4c-8328-4bed-bd81-aac377f1611f";
    let lat = 0;
    let lng = 0;
    let renderGraph = false;
    const [stars, setStars] = useState("");
    const [hasError, setHasError] = useState(false);
    const [routeMarkers, setRouteMarkers] = useState(
        []
    );
    const [avgRatingPerMonth, setAvgRatingPerMonth] = useState(
        []
    );
    const addRating = () => {
        const newRating = {
            UserId: props.details.userId,
            WalkId: walkId,
            WalkRating: Number(stars)
        };
        console.log(newRating);
        axios.post(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/ratings`, newRating)
            .catch(
                error => setHasError(true)
            );
    };
    const handleChange = (newValue) => {
        try {
            setStars(newValue);
        } catch {
            setHasError(true);
        }
    };
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
    if (avgRatingPerMonth.length > 0) {
        renderGraph = true;
    }
    else {
        renderGraph = false;
    }
    // Only run this code once, when the component first mounts
    useEffect(() => {
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/${walkId}`)
            .then(
                response => setRouteMarkers(response.data[0].routes)
            )
            .catch(
                error => setHasError(true)
            );
    },
        // the array would normally contain values that may change, and React would run the above code WHEN that value changes
        // "Array of dependencies"
        []
    );
    useEffect(() => {
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/rating/${walkId}`)
            .then(
                response => setAvgRatingPerMonth(response.data)
            )
            .catch(
                error => setHasError(true)
            );
    },
        []
    );
    return (
        <>
            {!hasError && (
                <div>
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
                            {renderGraph === true && <Graph data={avgRatingPerMonth} />}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="addRating__container">
                                <h4 className="heading heading--secondary">Rate Walk</h4>
                                <RatingsBar value={stars} disabled={false} onChange={handleChange} />
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
                </div>
            )};
            {hasError && <ErrorComponent></ErrorComponent>}
        </>
    );
};
function ErrorComponent() {
    return <Redirect to="/NotFoundPage" />;
}
export default GoogleApiWrapper({
    apiKey: API_KEY
})(IndividualWalk);