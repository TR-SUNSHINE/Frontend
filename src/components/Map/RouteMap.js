import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from "google-maps-react";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const mapStyles = {
    map: {
        position: "absolute",
        width: "200%",
        height: "200%"
    }
};

export class RouteMap extends Component {
    constructor(props) {
        super(props);
        this.google = props.google;
        this.mapDisableDoubleClickZoom = props.mapDisableDoubleClickZoom;
        this.mapDraggable = props.mapDraggable;
        this.mapZoom = props.mapZoom;
        this.mapCenterLat = props.mapCenterLat;
        this.mapCenterLng = props.mapCenterLng;
        this.markerLat = props.markerLat;
        this.markerLng = props.markerLng;
        this.markerClickable = props.markerClickable;
        this.allowDrawPolyLines = props.allowDrawPolyLines;

        if (this.props.markerLat === undefined || this.props.markerLng === undefined) {
            this.renderMarker = false;
        }
        else {
            this.renderMarker = true;
        }

        if (this.props.route === undefined) {
            this.renderRoute = false;
        }
        else {
            this.renderRoute = true;
        }
    }

    state = {
        markers: [

        ]
    };

    componentWillMount() {
        if (this.renderRoute) {
            this.setInitialMarkers();
        }
    }

    setInitialMarkers() {
        this.setState({ markers: this.props.route });

    }

    onMapClick = (mapProps, map, clickEvent) => {
        if (this.renderRoute && this.allowDrawPolyLines) {
            const updatedMarkers = [...this.state.markers];
            updatedMarkers.push({ key: this.state.markers.length, lat: clickEvent.latLng.lat(), lng: clickEvent.latLng.lng() });
            this.setState({ markers: updatedMarkers });
        }
    };
    render() {
        const style = Object.assign({}, mapStyles.map);

        return (
            <div style={style}>
                <Map
                    google={this.google}
                    style={this.style}
                    initialCenter={{
                        lat: this.mapCenterLat,
                        lng: this.mapCenterLng
                    }}
                    zoom={this.mapZoom}
                    onClick={this.onMapClick}
                    draggable={this.mapDraggable}
                    disableDoubleClickZoom={this.mapDisableDoubleClickZoom}
                >
                    <Marker lat={this.markerLat} lng={this.markerLng} visible={this.renderMarker} clickable={this.markerClickable} />
                    {/*this.state.markers.map((coords, index) => <Marker key={`marker-${index}`} position={coords} />)*/}
                    {this.state.markers.map((coords, index) => {
                        if (index === 0 || index === this.state.markers.length - 1) {
                            return <Marker key={`marker-${index}`} position={coords} />;
                        }
                        return null;
                    })}

                    <Polyline
                        visible={true}
                        path={this.state.markers}
                        strokeColor="#0000ff"
                        strokeOpacity={0.8}
                        strokeWeight={6}
                        editable={true}
                        draggable={true}
                    />
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: API_KEY
})(RouteMap);