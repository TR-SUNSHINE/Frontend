import { render, screen } from "@testing-library/react";
import WeatherPage from "./WeatherPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("WeatherPage component", () => {
    afterEach(() => jest.clearAllMocks());

    test("Given a WeatherPage component is rendered, When the component is rendered, The title and a description should be displayed", () => {

        render(
            <Router>
                <WeatherPage />
            </Router>
        );

        expect(screen.getByText("Weather: next 24 hours")).toBeInTheDocument();
    });

    test("Given a WeatherPage component is rendered, When the component is rendered, a Set Reminder button should be present", () => {

        render(
            <Router>
                <WeatherPage />
            </Router>
        );
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });
});