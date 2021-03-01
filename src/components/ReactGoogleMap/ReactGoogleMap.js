import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";


const mapStyles = {
    width: "100%",
    height: "100%"
};

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

class ReactGoogleMap extends Component {

    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 53.46265,
                        lng: -2.24909
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={"This is test name"}
                    />
                </Map>
            </div>
        );
    }
};

export default GoogleApiWrapper({ apiKey: googleKey })(ReactGoogleMap);

