import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocationMap from "./RouteMap";
import "./RouteMap.css";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export class RouteMapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

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
        return (

            <CurrentLocationMap
                centerAroundCurrentLocation
                google={this.props.google}
            >
                <Marker onClick={this.onMarkerClick} name={"Current Location"} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocationMap>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: API_KEY
})(RouteMapContainer);