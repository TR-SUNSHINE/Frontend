import { render, screen } from "@testing-library/react";
import Walks from "./Walks";
import { BrowserRouter as Router } from "react-router-dom";

const mockWalks = [{
    aveRating: 1,
    dayOf: "27",
    id: "f77d9d24-485d-458b-9fb7-493b987ccde9",
    monthOf: "3",
    userID: "5e37e4d7-d053-4936-8827-01500c10a959",
    walkName: "City Centre",
    walktime: "3/27/2021 10:55:05 PM",
    yearOf: "2021"
}, {
    aveRating: 0,
    dayOf: "24",
    id: "8beaa7c6-a98d-4204-a174-7cd139f05d0d",
    monthOf: "3",
    userID: "5e37e4d7-d053-4936-8827-01500c10a959",
    walkName: "School Run",
    walktime: "3/24/2021 6:14:05 PM",
    yearOf: "2021"
}];

const mockHistory = {};

describe("Walks component", () => {

    test("Given the required props, When the component is rendered, Then a list of walks should be rendered.", () => {

        render(
            <Router>
                <Walks walks={mockWalks} history={mockHistory} />
            </Router>
        );
        expect(screen.getByText("School Run")).toBeInTheDocument();
        expect(screen.getByText("City Centre")).toBeInTheDocument();

    });

});