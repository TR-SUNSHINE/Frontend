import { render, screen } from "@testing-library/react";
import WeatherContainer from "./WeatherContainer";



describe("WeatherContainer component", () => {
    afterEach(() => jest.clearAllMocks());

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
            weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "night_partial_cloud" }],
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
        weather: [{ id: 802, main: "Clouds", description: "scattered clouds", icon: "night_partial_cloud" }],
        wind_deg: 221,
        wind_gust: 10.91,
        wind_speed: 6.61
    };

    const requiredToggleWeatherTimeSelected = jest.fn();

    const requiredShowLocalTime = jest.fn();

    test("Given the required props, When the component is rendered, The title and a description should be displayed", () => {

        const { getByTestId } = render(<WeatherContainer weatherTimes={requiredWeatherTimes} selectedWeatherTime={requiredSelectedWeatherTime} toggleWeatherTimeSelected={requiredToggleWeatherTimeSelected} reminderTime={0} showLocalTime={requiredShowLocalTime} />);

        expect(screen.getByText("Weather: next 24 hours")).toBeInTheDocument();

        expect(screen.getByText("Click on a time to set a reminder for today.")).toBeInTheDocument();

        expect(screen.getAllByTestId("reminder")[0]).toHaveAttribute("hidden");

        expect(screen.getAllByTestId("reminder")[1]).toHaveTextContent("Click on the button to delete the reminder");

    });
});