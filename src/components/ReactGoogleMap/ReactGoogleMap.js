import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";

const ReactGoogleMap = () => {

    const ref = useRef();
    const [map, setMap] = useState();

    const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

    useEffect(() => {
        const onLoad = () => {

            console.log("in onLoad");

            setMap(new window.google.maps.Map(ref.current,
                {
                    center: { lat: 53.46265, long: -2.24909 },
                    zoom: 8
                })
            );

        };

        if (!window.google) {

            const script = document.createElement(`script`);
            script.src = `https://maps.googleapis.com/maps/api/js?key=` + googleKey;
            document.head.append(script);
            script.addEventListener(`load`, onLoad);
            return () => script.removeEventListener(`load`, onLoad);
        };
    });

    console.log(map);
    return (
        <div
            style={{ height: `30vh`, margin: `1em 0`, borderRadius: `0.5em` }}
            {...ref}
        />
    );
};

export default ReactGoogleMap;

