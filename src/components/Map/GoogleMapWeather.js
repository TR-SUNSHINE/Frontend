import React from "react";
import ReactDOM from "react-dom";
import "../Map/GoogleMap.css";

export class GoogleMapWeather extends React.Component {

    componentDidMount() {
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {

            this.loadMap();

        } else if (prevProps.currentLocation.lat !== this.props.currentLocation.lat) {
            this.recenterMap();

        } else if (prevProps.reminderId !== this.props.reminderId) {
            this.recenterMap();
        }

    };

    loadMap() {
        if (this.props && this.props.google) {

            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            // reference to the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef);
            const center = new maps.LatLng(this.props.currentLocation.lat, this.props.currentLocation.lng);

            const mapConfig = {
                center: center,
                zoom: this.props.zoom,
                draggable: this.props.draggable,
                disableDoubleClickZoom: this.props.disableDoubleClickZoom
            };

            // maps.Map() is constructor that instantiates the map
            this.map = new maps.Map(node, mapConfig);

        }
    }

    recenterMap() {
        const map = this.map;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {

            let center = new maps.LatLng(this.props.currentLocation.lat, this.props.currentLocation.lng);
            map.panTo(center);
        }

    }

    renderChildren() {
        const { children } = this.props;
        if (!children) return;
        return React.Children.map(children, c => {
            if (!c) return;

            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.props.currentLocation
            });
        });
    }

    render() {
        return (
            <div className="map_location__container--weather">
                <div className="map_location__map" ref="map">
                    Loading map...
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

export default GoogleMapWeather;