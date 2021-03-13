import React from "react";
import ReactDOM from "react-dom";
import "../Map/GoogleMap.css";

export class MapTest extends React.Component {

    componentDidMount() {

        console.log("in component did mount");
        console.log(this.props.currentLocation);
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.google !== this.props.google) {
            this.loadMap();

        }

        if (prevProps.currentLocation.lat !== this.props.currentLocation.lat) {

            this.recenterMap();

        }

    };

    recenterMap() {
        const map = this.map;
        const current = this.props.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            console.log(center);
            map.panTo(center);
        }
    }

    loadMap() {

        if (this.props && this.props.google) {
            // checks if google is available

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

            this.map.addListener("click", (evt) => {
                this.props.onClick(this.props, this.map, evt);
            });


        }
    }

    renderChildren() {
        console.log(this.props.children);
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
            <div className="map_location__container">
                <div className="map_location__map" ref="map">
                    Loading map...
            </div>
                {this.renderChildren()}
            </div>
        );
    }
}

export default MapTest;