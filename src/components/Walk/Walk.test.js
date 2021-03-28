import { render, screen } from "@testing-library/react";
import Walk from "./Walk";
import { BrowserRouter as Router } from "react-router-dom";

const mockWalk = {
    aveRating: 1,
    dayOf: "27",
    id: "f77d9d24-485d-458b-9fb7-493b987ccde9",
    monthOf: "3",
    userID: "5e37e4d7-d053-4936-8827-01500c10a959",
    walkName: "City Centre",
    walktime: "3/27/2021 10:55:05 PM",
    yearOf: "2021"
};

const mockHistory = {};

describe("Walk component", () => {

    test("Given the required props, When the component is rendered, Then a walk should be rendered", () => {

        render(
            <Router>
                <Walk walk={mockWalk} history={mockHistory} />
            </Router>

        );

        expect(screen.getByText("City Centre")).toBeInTheDocument();
    });

    test("Given the required props, When the screen is rendered, Then there should be a delete button", () => {

        render(
            <Router>
                <Walk walk={mockWalk} />
            </Router>

        );

        const deleteButton = screen.getAllByRole("button").find(button => button.textContent === "x");

        expect(deleteButton).toBeInTheDocument();

    });

});