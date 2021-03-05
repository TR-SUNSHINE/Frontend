import React, { Component, useState, useCallback } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Map from "../Map/RouteMap";
import "../Map/RouteMap.css";
import Button from "react-bootstrap/Button";
import RatingsBar from "../RatingsBar/RatingsBar";
import Graph from "../Graph/Graph";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export class IndividualWalk extends Component {

    constructor(props) {
        super(props);

        if (this.state.routeMarkers === undefined) {
            //Default Manchester
            this.lat = 53.47783;
            this.lng = -2.24317;
        }
        else {
            //From State
            const middleItem = this.state.routeMarkers[this.state.routeMarkers.length / 2 | 0];
            this.lat = middleItem.lat;
            this.lng = middleItem.lng;
        }
    }

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        user:
        {
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
        ]
    };

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <h3 className="heading heading--main">Individual Walk</h3>
                    </Col>
                </Row>
                <Row>
                    <div className="card p-0">
                        <Map
                            mapDisableDoubleClickZoom={true}
                            mapDraggable={false}
                            mapZoom={13}
                            mapCenterLat={this.lat}
                            mapCenterLng={this.lng}
                            markerClickable={false}
                            route={this.state.routeMarkers}
                            allowDrawPolyLines={false}
                        >
                        </Map>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Graph data={this.state.user} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <RatingsBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="button__container button__container--center">
                            <Button>Add New Rating</Button>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
})(IndividualWalk);