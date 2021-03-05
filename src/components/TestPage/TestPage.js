import React, { Component, useState, useCallback } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Map from "../Map/RouteMap";
import "../Map/RouteMap.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export class TestPage extends Component {

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
    };

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <h3 className="heading heading--main">Add Walk</h3>
                    </Col>
                </Row>
                <Row>
                    <div className="card p-0">
                        <Map
                            mapDisableDoubleClickZoom={false}
                            mapDraggable={true}
                            mapZoom={15}
                            mapCenterLat={this.lat}
                            mapCenterLng={this.lng}
                            markerClickable={false}
                            allowDrawPolyLines={true}
                        >
                        </Map>
                    </div>
                </Row>

                <Row>
                    <Col>
                        <div className="button__container button__container--center">
                            <Button>Add Walk</Button>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
})(TestPage);