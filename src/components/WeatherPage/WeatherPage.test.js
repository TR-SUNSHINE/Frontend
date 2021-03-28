import { render, screen, cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// importing axios & calling it axiosMock
import axiosMock from "axios";
import WeatherPage from "./WeatherPage";
import { BrowserRouter as Router } from "react-router-dom";

const mockDetails = { selectedTime: 0, reminderId: "", reminderTime: 0, userId: "5e37e4d7-d053-4936-8827-01500c10a123" };

const mockHistory = {};

const mockData = {};

describe("WeatherPage", () => {
    afterEach(cleanup);

    test("initial rendering", async () => {

        axiosMock.get.mockResolvedValueOnce({ data: mockData });

        render(
            <Router>
                <WeatherPage details={mockDetails} history={mockHistory} />
            </Router>

        );

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
});


