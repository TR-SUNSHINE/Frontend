import { render, screen } from "@testing-library/react";
import Weather from "./Weather";
import { faSun, faBolt, faWind } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";


const useEffect = jest.spyOn(React, "useEffect").mockImplementation(() => { });

describe("Weather component", () => {
    afterEach(() => jest.clearAllMocks());

    const requiredWeatherTimes = [
        { id: "001", time: "13:00", temperature: "22°", description: "sunny", icon: faSun },
        { id: "002", time: "14:00", temperature: "23°", description: "lightening", icon: faBolt },
        { id: "003", time: "15:00", temperature: "24°", description: "windy", icon: faWind },
    ];

    const requiredSelectedWeatherTime = { id: "002", time: "14:00", temperature: "23°", description: "lightening", icon: faBolt };

    const requiredToggleWeatherTimeSelected = jest.fn();

    test(`Given the required props, 
    When the component is rendered, then an array of weather div elements should be present.`, () => {

        render(
            <Router>
                <Weather weatherTimes={requiredWeatherTimes} selectedWeatherTime={requiredSelectedWeatherTime} toggleWeatherTimeSelected={requiredToggleWeatherTimeSelected} />);
            </Router>
        );
        // screen.debug()

        expect(screen.getByText("windy")).toBeInTheDocument();
        expect(screen.getByText("lightening")).toBeInTheDocument();
        expect(screen.getByText("sunny")).toBeInTheDocument();
        expect(screen.getByText("13:00")).toBeInTheDocument();
        expect(screen.getByText("14:00")).toBeInTheDocument();
        expect(screen.getByText("15:00")).toBeInTheDocument();
        expect(screen.getByText("22°")).toBeInTheDocument();
        expect(screen.getByText("23°")).toBeInTheDocument();
        expect(screen.getByText("24°")).toBeInTheDocument();
    });
});

