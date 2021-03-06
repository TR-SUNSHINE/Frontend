import "./AddWalk.css";
import Button from "react-bootstrap/Button";
import RouteMap from "../Map/RouteMap";
import React from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";

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

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        let lat = 0;
        let lng = 0;
        if (this.state.routeMarkers.length < 1) {
            //Default Manchester
            lat = 53.47783;
            lng = -2.24317;
            console.log("using manchester");
        }
        else {
            //From State
            const middleItem = this.state.routeMarkers[this.state.routeMarkers.length / 2 | 0];
            lat = middleItem.lat;
            lng = middleItem.lng;
            console.log("using route");
        }

        console.log(lat);
        console.log(lng);
        return (
            <div>
                <h3 className="heading heading--main">Add Walk</h3>
                <RouteMap
                    centerAroundCurrentLocation={true}
                    lat={lat}
                    lng={lng}
                    google={this.props.google}
                    zoom={15}
                    draggable={true}
                    disableDoubleClickZoom={false}
                >
                    {/*<Marker lat={this.markerLat} lng={this.markerLng} visible={this.renderMarker} clickable={this.markerClickable} />*/}
                    {/*this.state.markers.map((coords, index) => <Marker key={`marker-${index}`} position={coords} />)*/}
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
                        editable={false}
                        draggable={false}
                    />
                </RouteMap>

                <div className="button__container button__container--center">
                    <Button>Add Walk</Button>
                </div>
            </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: API_KEY
})(AddWalk);