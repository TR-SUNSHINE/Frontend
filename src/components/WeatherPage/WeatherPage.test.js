import { render, screen } from "@testing-library/react";
import WeatherPage from "./WeatherPage";

describe("WeatherPage component", () => {
    afterEach(() => jest.clearAllMocks());

    test("Given a WeatherPage component is rendered, When the component is rendered, The title and a description should be displayed", () => {

        render(<WeatherPage />);

        expect(screen.getByText("Weather for the next 24 hours")).toBeInTheDocument();
    });

    test("Given a WeatherPage component is rendered, When the component is rendered, a Set Reminder button should be present", () => {

        render(<WeatherPage />);
        expect(screen.getAllByRole("button")).toHaveLength(3);
    });
});