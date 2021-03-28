import { render, screen } from "@testing-library/react";
import Weather from "./Weather";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import userEvent from "@testing-library/user-event";

const requiredWeatherTimes = [
    {
        clouds: 90,
        dew_point: 9.12,
        dt: 1616950800,
        feels_like: 7.59,
        humidity: 76,
        pop: 0,
        pressure: 1014,
        temp: 13.25,
        uvi: 0.1,
        visibility: 10000,
        weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "cloudy" }],
        wind_deg: 218,
        wind_gust: 18.95,
        wind_speed: 7.81,
    },
    {
        clouds: 39,
        dew_point: 8.21,
        dt: 1617022800,
        feels_like: 12.01,
        humidity: 57,
        pop: 0,
        pressure: 1022,
        temp: 17,
        uvi: 3.35,
        visibility: 10000,
        weather: [{ id: 802, main: "Clouds", description: "heavy intensity rain", icon: "night_partial_cloud" }],
        wind_deg: 221,
        wind_gust: 10.91,
        wind_speed: 6.61
    }
];

const requiredSelectedWeatherTime = {
    clouds: 39,
    dew_point: 8.21,
    dt: 1617022800,
    feels_like: 12.01,
    humidity: 57,
    pop: 0,
    pressure: 1022,
    temp: 17,
    uvi: 3.35,
    visibility: 10000,
    weather: [{ id: 802, main: "Clouds", description: "overcast clouds", icon: "night_partial_cloud" }],
    wind_deg: 221,
    wind_gust: 10.91,
    wind_speed: 6.61
};

const requiredToggleWeatherTimeSelected = jest.fn();

describe("Weather component tests", () => {

    test(`Given the required props, 
    When the component is rendered, then an array of weather div elements should be present.`, () => {

        render(
            <Router>
                <Weather weatherTimes={requiredWeatherTimes} selectedWeatherTime={requiredSelectedWeatherTime} toggleWeatherTimeSelected={requiredToggleWeatherTimeSelected} />;
            </Router>
        );

        expect(screen.getByText("overcast clouds")).toBeInTheDocument();
        expect(screen.getByText("heavy intensity rain")).toBeInTheDocument();
        expect(screen.getByText("17ºC")).toBeInTheDocument();
        expect(screen.getByText("12.01ºC")).toBeInTheDocument();
        expect(screen.getByText("13.25ºC")).toBeInTheDocument();
        expect(screen.getByText("7.59ºC")).toBeInTheDocument();
        expect(screen.getByText("14:00")).toBeInTheDocument();
        expect(screen.getByText("18:00")).toBeInTheDocument();

    });

    test(`When the component is rendered a right and left scroll button should be present.`, () => {

        render(
            <Router>
                <Weather weatherTimes={requiredWeatherTimes} selectedWeatherTime={requiredSelectedWeatherTime} toggleWeatherTimeSelected={requiredToggleWeatherTimeSelected} />;
                </Router>
        );


        const rightButton = screen.getAllByRole("button").find(button => button.textContent === ">");
        const leftButton = screen.getAllByRole("button").find(button => button.textContent === "<");

        expect(leftButton).toBeInTheDocument();
        expect(rightButton).toBeInTheDocument();

    });

    test(`When the component is rendered and a user clicks the weather button, the passed in toggleWeatherTime selected function should be called.`, () => {

        render(
            <Router>
                <Weather weatherTimes={requiredWeatherTimes} selectedWeatherTime={requiredSelectedWeatherTime} toggleWeatherTimeSelected={requiredToggleWeatherTimeSelected} />;
                </Router>
        );


        const weatherButton = screen.getAllByRole("button")[1];

        expect(weatherButton).toHaveTextContent("18:00temp:13.25ºCfeels:7.59ºCovercast clouds");

        userEvent.click(weatherButton);
        expect(requiredToggleWeatherTimeSelected).toHaveBeenCalled();

    });

    test(`Given the required props, When a the page is rendered, a passed in weather item in the array should contain the expected text.`, () => {

        render(
            <Router>
                <Weather weatherTimes={requiredWeatherTimes} selectedWeatherTime={requiredSelectedWeatherTime} toggleWeatherTimeSelected={requiredToggleWeatherTimeSelected} />;
                </Router>
        );


        const weatherButton = screen.getAllByRole("button")[1];

        expect(weatherButton).toHaveTextContent("18:00temp:13.25ºCfeels:7.59ºCovercast clouds");

        screen.debug();

    });
});