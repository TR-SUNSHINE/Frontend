import { render, screen } from "@testing-library/react";
import WeatherContainer from "./WeatherContainer";
import { faSun, faBolt, faWind } from "@fortawesome/free-solid-svg-icons";


describe("WeatherContainer component", () => {
    afterEach(() => jest.clearAllMocks());

    const requiredWeatherTimes = [
        { id: "001", time: "13:00", temperature: "22°", description: "sunny", icon: faSun },
        { id: "002", time: "14:00", temperature: "23°", description: "lightening", icon: faBolt },
        { id: "003", time: "15:00", temperature: "24°", description: "windy", icon: faWind },
    ];

    const requiredSelectedWeatherTime = { id: "002", time: "14:00", temperature: "23°", description: "lightening", icon: faBolt };

    const requiredToggleWeatherTimeSelected = jest.fn();

    test("Given the required props, When the component is rendered, The title and a description should be displayed", () => {

        render(<WeatherContainer weatherTimes={requiredWeatherTimes} selectedWeatherTime={requiredSelectedWeatherTime} toggleWeatherTimeSelected={requiredToggleWeatherTimeSelected} />);

        expect(screen.getByText("Best walk times")).toBeInTheDocument();

        expect(screen.getByText("Click on a time then set your walk time reminder for today.")).toBeInTheDocument();

        expect(screen.getByText("Click on a time then set your walk time reminder for today.")).toBeInTheDocument();
    });
});