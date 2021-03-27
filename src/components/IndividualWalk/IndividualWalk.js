import "./IndividualWalk.css";
import { Redirect, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import RatingsBar from "../RatingsBar/RatingsBar";
import Graph from "../Graph/Graph";
import GoogleMap from "../Map/GoogleMap";
import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Button/Button.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const IndividualWalk = (props) => {
    const { walkId } = useParams();
    const { walkName } = useParams();
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
        axios.post(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/ratings`, newRating)
            .then(response => {
                console.log(response);
                props.history.push("/MyWalksPage");
            })
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

    useEffect(() => {
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/${walkId}`)
            .then(
                response => {
                    console.log(response);
                    setRouteMarkers(response.data[0].routes);
                }
            )
            .catch(
                error => setHasError(true)
            );
    }, []
    );
    useEffect(() => {
        axios
            .get(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/rating/${walkId}`)
            .then(
                response => {
                    console.log(response);
                    setAvgRatingPerMonth(response.data);
                }
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
                <>
                    <Row>
                        <Col>
                            <h3 className="heading heading--main">{walkName}</h3    >
                            <GoogleMap
                                centerAroundCurrentLocation={false}
                                lat={lat}
                                lng={lng}
                                google={props.google}
                                zoom={15}
                                draggable={true}
                                disableDoubleClickZoom={false}
                                maptype={"individualwalk"}
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

                    <h4 className="heading heading--secondary">Rate Walk</h4>
                    <Row className="addrating__container">
                        <Col xs={6} sm={12}>
                            <div className="addrating__container--right" >
                                <RatingsBar value={Number(stars)} disabled={false} onChange={handleChange} />
                            </div>
                        </Col>
                        <Col xs={6} sm={12}>
                            <div className="addrating_container--right" >
                                <Button variant="addrating" onClick={addRating}>Rate</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div className="button__container" >
                                <Button variant="single" onClick={() => props.history.push("/MyWalksPage")}>My Walks</Button>
                            </div>
                        </Col>
                    </Row>
                </>
            )}
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