import "./AddWalk.css";
import Button from "react-bootstrap/Button";
import GoogleMap from "../Map/GoogleMap";
import React from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export class AddWalk extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        };
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    onMapClick = (mapProps, map, clickEvent) => {
        const updatedMarkers = [...this.state.routeMarkers];
        updatedMarkers.push({ key: this.state.routeMarkers.length, lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() });
        this.setState({ routeMarkers: updatedMarkers });
    };

    handleChange = (event) => {
        if (event.target.name === "walkNameInput") {
            this.setState({ walkName: event.target.value });
        }
    };

    addWalk = () => {
        //Add routeMarkers to DB here + walkName
        console.log("insert routeMarkers to DB");
        //Clear route from screen
        this.setState({ routeMarkers: [] });
        this.setState({ activeMarker: null });
        this.setState({ selectedPlace: {} });
        this.setState({ showingInfoWindow: true });
        this.setState({ walkName: "" });
    };

    clearWalk = () => {
        //Clear route from screen
        this.setState({ routeMarkers: [] });
        this.setState({ activeMarker: null });
        this.setState({ selectedPlace: {} });
        this.setState({ showingInfoWindow: true });
        this.setState({ walkName: "" });
    };

    render() {
        let lat = 0;
        let lng = 0;
        if (this.state.routeMarkers.length < 1) {
            //Default Manchester
            lat = 53.47783;
            lng = -2.24317;
        }
        else {
            //From State
            const middleItem = this.state.routeMarkers[this.state.routeMarkers.length / 2 | 0];
            lat = middleItem.lat;
            lng = middleItem.lng;
        }

        return (
            <>
                <Row>
                    <Col>
                        <h3 className="heading heading--main">Add Walk</h3>
                        <GoogleMap
                            centerAroundCurrentLocation={true}
                            lat={lat}
                            lng={lng}
                            google={this.props.google}
                            zoom={15}
                            draggable={true}
                            disableDoubleClickZoom={false}
                            onClick={this.onMapClick}
                        >
                            {/*<Marker onClick={this.onMarkerClick} lat={this.markerLat} lng={this.markerLng} visible={this.renderMarker} clickable={this.markerClickable} />*/}
                            {/*this.state.markers.map((coords, index) => <Marker key={`marker-${index}`} position={coords} />)*/}
                            {console.log(this.state.routeMarkers)}
                            {this.state.routeMarkers.map((coords, index) => {
                                if (index === 0 || index === this.state.routeMarkers.length - 1) {
                                    return <Marker key={`marker-${index}`} position={coords} />;
                                }
                                return null;
                            })}
                            {/*<Marker onClick={this.onMarkerClick} name={"Current Location"} />*/}
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                            >
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                </div>
                            </InfoWindow>

                            <Polyline
                                visible={true}
                                path={this.state.routeMarkers}
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
                            <Form.Label style={{ fontSize: "20px", fontWeight: "bold" }}>Walk Name</Form.Label>
                            <Form.Control as="textarea" name="walkNameInput" onChange={this.handleChange} rows={1} />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col xs={12} sm={12} md={6}>
                                <div className="button__container button__container--left" >
                                    <Button variant="accessible" onClick={this.addWalk}><Link className="button--link" to="/MyWalksPage">Add Walk</Link></Button>
                                </div>
                            </Col>

                            <Col xs={12} sm={12} md={6}>
                                <div className="button__container button__container--right" >
                                    <Button variant="accessible" onClick={this.clearWalk}>Clear Walk</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: API_KEY
})(AddWalk);