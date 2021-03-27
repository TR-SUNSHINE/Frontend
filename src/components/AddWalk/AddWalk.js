import "./AddWalk.css";
import Button from "react-bootstrap/Button";
import GoogleMap from "../Map/GoogleMap";
import React, { useState } from "react";
import { GoogleApiWrapper, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import "../Button/Button.css";
import "../../index.css";
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
            updatedMarkers.push({ key: item.routeMarkers.length, lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() });
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
                            <h3 className="heading heading--main">Create Walk</h3>
                            <GoogleMap
                                centerAroundCurrentLocation={true}
                                lat={lat}
                                lng={lng}
                                google={props.google}
                                zoom={15}
                                draggable={true}
                                disableDoubleClickZoom={false}
                                onClick={onMapClick}
                                maptype={"addwalk"}
                            >
                                {item.routeMarkers.map((coords, index) => {
                                    if (index === 0 || index === item.routeMarkers.length - 1) {
                                        return <Marker key={`marker-${index}`} position={coords} />;
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
                        <Col>
                            {/* <Form.Group controlId="form-row"> */}
                            <Form.Group>
                                <Form.Label id={"label--walk"}>Walk Name</Form.Label>
                                <Form.Control as="textarea" name="walkNameInput" value={walkName} onChange={handleChange} rows={1} placeholder="Enter a short walk description" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <div className="button__container button__container--left" id="container--add" >
                                <Button variant="double" disabled={item.routeMarkers.length > 1 && walkName.length > 0 ? false : true} onClick={addWalk}>Add Walk</Button>
                            </div>
                        </Col>

                        <Col xs={6}>
                            <div className="button__container button__container--right" id="container--clear" >
                                <Button variant="double" disabled={item.routeMarkers.length > 1 && walkName.length > 0 ? false : true} onClick={clearWalk}>Clear Walk</Button>
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