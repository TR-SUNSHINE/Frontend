import React from "react";
import ReactDOM from "react-dom";
import "./GoogleMap.css";

export class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
        const { lat, lng } = this.props.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        };

    }

    componentDidUpdate(prevProps, prevState) {

        console.log("in componentDidUpdate");

        if (prevProps.google !== this.props.google) {
            console.log("in prevProps.google. in componentDidUpdate");
            console.log(prevProps.google, this.props.google);
            this.loadMap();

        } else if (prevProps.lat !== this.props.lat) {
            console.log("in prevProps.lat in componentDidUpdate");
            console.log(prevProps.lat, this.props.lat);
            this.setState({
                currentLocation: {
                    lat: this.props.lat,
                    lng: this.props.lng
                }
            });

        } else if (prevState.currentLocation !== this.state.currentLocation) {
            console.log("in prevState.currentLocation in componentDidUpdate");
            console.log(prevState.currentLocation, this.state.currentLocation);
            this.recenterMap();
        }

    };

    recenterMap() {
        console.log("in recenter map");
        console.log(this.state.currentLocation);
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            // let center = new maps.LatLng(current.lat, current.lng);
            let center = new maps.LatLng(this.props.lat, this.props.lng);
            console.log(center);
            map.panTo(center);
        }
    }

    componentDidMount() {


        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }
        else {

            this.setState({
                currentLocation: {
                    lat: this.props.lat,
                    lng: this.props.lng
                }
            });
        }
        this.loadMap();
    }

    loadMap() {

        console.log("in loadmap");
        console.log(this.props);

        if (this.props && this.props.google) {
            // checks if google is available

            console.log("in loadmap this.props.google");

            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            // reference to the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef);

            let { zoom } = this.props;
            let { draggable } = this.props;
            let { disableDoubleClickZoom } = this.props;
            let { lat, lng } = this.state.currentLocation;

            if (!(this.props.lat === undefined || this.props.lng === undefined)) {

                console.log("in !this.props.lat");
                lat = this.props.lat;
                lng = this.props.lng;

            }
            const center = new maps.LatLng(lat, lng);
            console.log("center" + center);

            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom,
                    draggable: draggable,
                    disableDoubleClickZoom: disableDoubleClickZoom
                }
            );

            // maps.Map() is constructor that instantiates the map
            this.map = new maps.Map(node, mapConfig);

            this.map.addListener("click", (evt) => {
                this.props.onClick(this.props, this.map, evt);
            });
        }
    }

    renderChildren() {
        const { children } = this.props;
        console.log("in render children");
        console.log(children);
        if (!children) return;

        return React.Children.map(children, c => {
            if (!c) return;

            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation
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

GoogleMap.defaultProps = {
    zoom: 13,
    initialCenter: {
        lat: 53.47783,
        lng: -2.24317
    },
    centerAroundCurrentLocation: false,
    visible: true,
    onClick: function () { }
};
export default GoogleMap;