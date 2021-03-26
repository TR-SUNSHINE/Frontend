import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Navibar from "./NaviBar";
import { BrowserRouter as Router } from "react-router-dom";


describe("NaviBar component", () => {
    afterEach(() => jest.clearAllMocks());

    test(`Given the component is rendered, 
            then the Weather text should be present`, () => {
        render(
            <Router>
                <Navibar />
            </Router>
        );
        expect(screen.getByText("Weather")).toBeInTheDocument();
    });
});