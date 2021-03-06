import "./AddWalk.css";
import Button from "react-bootstrap/Button";
import GoogleMap from "../Map/GoogleMap";
import React from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            selectedPlace: {}
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

    addWalk = () => {
        //Add routeMarkers to DB here
        console.log("insert routeMarkers to DB");
        //Clear route from screen
        this.setState({ routeMarkers: [] });
    };

    clearWalk = () => {
        //Clear route from screen
        this.setState({ routeMarkers: [] });
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
            <div>
                <Row>
                    <Col>
                        <h3 className="heading heading--main">Add Walk</h3>
                    </Col>
                </Row>
                <Row>
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
                            editable={true}
                            draggable={true}
                        />
                    </GoogleMap>

                </Row>
                <Row>
                    <Col>
                        <div className="button__container button__container--center" onClick={this.addWalk}>
                            <Button>Add Walk</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="button__container button__container--center" onClick={this.clearWalk}>
                            <Button>Clear Walk</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: API_KEY
})(AddWalk);