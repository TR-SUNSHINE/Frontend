import "./AddWalk.css";
import Button from "react-bootstrap/Button";
import GoogleMap from "../Map/GoogleMap";
import React, { useState } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import "../Button/Button.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const AddWalk = (props) => {
    //Default Manchester
    let lat = 53.47783;
    let lng = -2.24317;

    const [hasError, setHasError] = useState(false);
    const [walkName, setWalkName] = useState("");
    const [item, setItem] = useState(
        { routeMarkers: [] }
    );
    const onMapClick = (mapProps, map, clickEvent) => {
        try {
            const updatedMarkers = [...item.routeMarkers];
            updatedMarkers.push({ Sequence: item.routeMarkers.length, lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() });
            setItem({ routeMarkers: updatedMarkers });
        } catch {
            setHasError(true);
        }
    };
    const handleChange = (event) => {
        try {
            if (event.target.name === "walkNameInput") {
                setWalkName(event.target.value);
            }
        } catch {
            setHasError(true);
        }
    };
    const addWalk = () => {
        const newWalk = {
            WalkName: walkName,
            UserID: props.details.userId,
            Routes: item.routeMarkers
        };
        console.log(newWalk);
        axios.post(`https://gt63kubuik.execute-api.eu-west-2.amazonaws.com/Prod/v1/walks/`, newWalk)
            .then(response => {
                console.log(response);
                props.history.push("/MyWalksPage");
            }
            )
            .catch(
                error => setHasError(true)
            );
        setItem({
            routeMarkers: [],
        });
    };
    const clearWalk = () => {
        try {
            setWalkName("");
            setItem({
                routeMarkers: [],
            });
        } catch {
            setHasError(true);
        }
    };
    return (
        <>
            {!hasError && (
                <div>
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
                                {/* {console.log(item.routeMarkers)} */}
                                {item.routeMarkers.map((coords, index) => {
                                    if (index === 0 || index === item.routeMarkers.length - 1) {
                                        return <Marker Sequence={`marker-${index}`} position={coords} />;
                                    }
                                    return null;
                                })}
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
                                <Form.Control as="textarea" name="walkNameInput" value={walkName} onChange={handleChange} rows={1} placeholder="Enter walk description" />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--left" >
                                <Button variant="double" disabled={item.routeMarkers.length > 1 && walkName.length > 0 ? false : true} onClick={addWalk}>Add Walk</Button>
                            </div>
                        </Col>

                        <Col xs={12} sm={6} md={6}>
                            <div className="button__container button__container--right" >
                                <Button variant="double" onClick={clearWalk}>Clear Walk</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
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
})(AddWalk);