import "./IndividualWalk.css";
import Button from "react-bootstrap/Button";
import RatingsBar from "../RatingsBar/RatingsBar";
import Graph from "../Graph/Graph";
import GoogleMap from "../Map/GoogleMap";
import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../Button/Button.css";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const IndividualWalk = (props) => {
    const [state, setState] = useState(
        {
            user: {
                id: 1,
                firstName: "Alun",
                lastName: "Groome",
                avgRatings:
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
            }
            , routeMarkers: [
                { key: 0, lat: 53.28365589513839, lng: -2.439117028758835 },
                { key: 1, lat: 53.281240718326224, lng: -2.4595447326162567 },
                { key: 2, lat: 53.292939417021564, lng: -2.469329431102585 }
            ],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    );
    const onClose = props => {
        if (state.showingInfoWindow) {
            setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    const addRating = () => {
        //Add routeMarkers to DB here
        console.log("insert rating to DB");
    };
    let lat = 0;
    let lng = 0;
    if (state.routeMarkers.length < 1) {
        //Default Manchester
        lat = 53.47783;
        lng = -2.24317;
    }
    else {
        //From State
        const middleItem = state.routeMarkers[state.routeMarkers.length / 2 | 0];
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
                        {state.routeMarkers.map((coords, index) => {
                            if (index === 0 || index === state.routeMarkers.length - 1) {
                                return <Marker key={`marker-${index}`} position={coords} />;
                            }
                            return null;
                        })}
                        <InfoWindow
                            marker={state.activeMarker}
                            visible={state.showingInfoWindow}
                            onClose={onClose}
                        >
                            <div>
                                <h4>{state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                        <Polyline
                            visible={true}
                            path={state.routeMarkers}
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
                    <Graph data={state.user} />
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