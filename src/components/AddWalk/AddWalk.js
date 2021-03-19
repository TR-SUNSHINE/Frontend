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
import { Redirect } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const AddWalk = (props, userId) => {
    //Temporarily hardcoding this untill walkId and userId is passed through props from previous page.
    userId = "3bd4d097-8193-11eb-b706-062d232c43b8";
    const [walkName, setWalkName] = useState("");
    const [item, setItem] = useState(
        {
            routeMarkers: [
            ],
            showingInfoWindow: false,
            activeMarker: {}
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
        updatedMarkers.push({ Sequence: item.routeMarkers.length, lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() });
        setItem({ routeMarkers: updatedMarkers });
    };
    const handleChange = (event) => {
        if (event.target.name === "walkNameInput") {
            setWalkName(event.target.value);
        }
    };
    const addWalk = () => {
        console.log(item.routeMarkers.length);
        console.log(walkName.length);
        if (item.routeMarkers.length > 1 && walkName.length > 0) {
            const newWalk = {
                WalkName: walkName,
                UserID: userId,
                Routes: item.routeMarkers
            };
            console.log("insert routeMarkers to DB");
            console.log(newWalk);

            axios.post(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/`, newWalk)
                //.then(() => axios.get(`https://e19u87cs8e.execute-api.eu-west-2.amazonaws.com/dev/users/${userId}/tasks`))
                //.then(response => setTasks(response.data))
                .catch(error => console.log(error));
            //Clear route from screen
            setItem({
                routeMarkers: [],
                activeMarker: null,
                showingInfoWindow: true
            });
        }
        return <Redirect to="/NotFoundPage" />;
    };
    const clearWalk = () => {
        //Clear route from screen
        setItem({
            routeMarkers: [],
            activeMarker: null,
            showingInfoWindow: true
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
                                return <Marker Sequence={`marker-${index}`} position={coords} />;
                            }
                            return null;
                        })}
                        {/*<Marker onClick={onMarkerClick} name={"Current Location"} />*/}
                        <InfoWindow
                            marker={item.activeMarker}
                            visible={item.showingInfoWindow}
                            onClose={onClose}
                        >
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