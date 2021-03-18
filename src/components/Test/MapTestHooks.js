import React, { useEffect, useRef, useState, useCallback } from "react";

const MapTestHooks = ({ lat, long, zoom }) => {

    console.log("in map test hooks");

    const mapDisplay = useRef();
    const [map, setMap] = useState();

    const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const onLoad = useCallback(() => {

        console.log("in onLoad");
        console.log(lat, long);

        const options = { center: new window.google.maps.LatLng(lat, long), zoom: zoom };
        setMap(new window.google.maps.Map(mapDisplay.current, options));

    }, [lat, long, zoom]);

    const recenterMap = useCallback(() => {
        console.log("in recenter");
        console.log(lat, long);

        let center = new window.google.maps.LatLng(lat, long);
        console.log(center);
        map.panTo(center);
    });

    useEffect(() => {

        if (!window.google) {

            console.log("in !window.google");

            const script = document.createElement(`script`);
            script.src =
                `https://maps.googleapis.com/maps/api/js?key=${googleKey}`;

            document.head.append(script);

            script.addEventListener(`load`, onLoad);

            return () => script.removeEventListener(`load`, onLoad);

        } else if (map) {

            recenterMap();
        }

        else {

            onLoad();
        }

    }, [googleKey, onLoad, recenterMap, map]);

    // if (map && typeof onMount === `function`) onMount(map, onMountProps);
    console.log(map);
    console.log();
    return (
        <div
            style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em`, backgroundColor: "red" }}
            ref={mapDisplay}
        />
    );
};

export default MapTestHooks;


// export default function Map({ options, onMount, className, onMountProps }) {
//   const ref = useRef();
//   const [map, setMap] = useState();

//   useEffect(() => {
//     const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
//     if (!window.google) {
//       const script = document.createElement(`script`)
//       script.src =
//         `https://maps.googleapis.com/maps/api/js?key=` +
//         process.env.GOOGLE_MAPS_API_KEY
//       document.head.append(script)
//       script.addEventListener(`load`, onLoad)
//       return () => script.removeEventListener(`load`, onLoad)
//     } else onLoad()
//   }, [options])

//   if (map && typeof onMount === `function`) onMount(map, onMountProps)
//   return (
//     <div
//       style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
//       {...{ ref, className }}
//     />
//   )
// }


MapTestHooks.defaultProps = {
    options: {
        center: { lat: 48, lng: 8 },
        zoom: 5,
    },
};

