import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const ReactGoogleMap = withScriptjs(withGoogleMap(({ isMarkerShown, googleMapURL, loadingElement, containerElement, mapElement }) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 53.46265, lng: -2.24909 }}
    >
        {isMarkerShown && <Marker position={{ lat: 53.46265, lng: -2.24909 }} />}

    </GoogleMap>

));

export default ReactGoogleMap;

