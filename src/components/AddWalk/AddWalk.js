import "./AddWalk.css";
import Button from "react-bootstrap/Button";
import GoogleMap from "../Map/GoogleMap";
import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "../Button/Button.css";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const AddWalk = (props) => {
    const [walkName, setWalkName] = useState("");
    const [item, setItem] = useState(
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
            ],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            walkName: ""
        }
    );
    const onClose = props => {
        if (item.showingInfoWindow) {
            setItem({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    const onMapClick = (mapProps, map, clickEvent) => {
        const updatedMarkers = [...item.routeMarkers];
        updatedMarkers.push({ key: item.routeMarkers.length, lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() });
        setItem({ routeMarkers: updatedMarkers });
    };
    const handleChange = (event) => {
        if (event.target.name === "walkNameInput") {
            setWalkName(event.target.value);
        }
    };
    const addWalk = () => {
        //Add routeMarkers to DB here + walkName
        console.log("insert routeMarkers to DB");
        //Clear route from screen
        setItem({
            routeMarkers: [],
            activeMarker: null,
            selectedPlace: {},
            showingInfoWindow: true,
            walkName: ""
        });
    };
    const clearWalk = () => {
        //Clear route from screen
        setItem({
            routeMarkers: [],
            activeMarker: null,
            selectedPlace: {},
            showingInfoWindow: true,
            walkName: ""
        });
    };
    let lat = 0;
    let lng = 0;

    //Default Manchester
    lat = 53.47783;
    lng = -2.24317;

    return (
        <>
            <Row>
                <Col>
                    <h3 className="heading heading--main">Add Walk</h3>
                    <GoogleMap
                        centerAroundCurrentLocation={true}
                        lat={lat}
                        lng={lng}
                        google={props.google}
                        zoom={15}
                        draggable={true}
                        disableDoubleClickZoom={false}
                        onClick={onMapClick}
                    >
                        {/*<Marker onClick={onMarkerClick} lat={markerLat} lng={markerLng} visible={renderMarker} clickable={markerClickable} />*/}
                        {/*state.markers.map((coords, index) => <Marker key={`marker-${index}`} position={coords} />)*/}
                        {console.log(item.routeMarkers)}
                        {item.routeMarkers.map((coords, index) => {
                            if (index === 0 || index === item.routeMarkers.length - 1) {
                                return <Marker key={`marker-${index}`} position={coords} />;
                            }
                            return null;
                        })}
                        {/*<Marker onClick={onMarkerClick} name={"Current Location"} />*/}
                        <InfoWindow
                            marker={item.activeMarker}
                            visible={item.showingInfoWindow}
                            onClose={onClose}
                        >
                            <div>
                                <h4>{item.selectedPlace}</h4>
                            </div>
                        </InfoWindow>
                        <Polyline
                            visible={true}
                            path={item.routeMarkers}
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
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                    <Form.Group controlId="form-row">
                        <Form.Label id="sdf" style={{ fontSize: "20px", fontWeight: "bold" }}>Walk Name</Form.Label>
                        <Form.Control as="textarea" name="walkNameInput" onChange={handleChange} rows={1} placeholder="Enter walk description" />
                    </Form.Group>
                </Col>
                <Col sm={4}>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} md={6}>
                    <div className="button__container button__container--left" >
                        <Button variant="double" onClick={addWalk}><Link className="button--link" to="/MyWalksPage">Add Walk</Link></Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={6}>
                    <div className="button__container button__container--right" >
                        <Button variant="double" onClick={clearWalk}>Clear Walk</Button>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default GoogleApiWrapper({
    apiKey: API_KEY
})(AddWalk);