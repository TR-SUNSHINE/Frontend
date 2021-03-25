import { fireEvent, render, screen } from "@testing-library/react";
import MyWalkPage from "./MyWalkPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("MyWalkPage component", () => {
    afterEach(() => jest.clearAllMocks());
    test(`Given the component is rendered, 
            then the My Walks text should be present`, () => {
        render(
            <Router>
                <MyWalkPage />
            </Router>
        );
        expect(screen.getByText("My Walks")).toBeInTheDocument();
    });

    test(`Given the component is rendered, 
        then the Back button should be present`, () => {
        render(
            <Router>
                <MyWalkPage />
            </Router>
        );
        expect(screen.getAllByRole("button").find(button => button.textContent === "Create Walk")).toBeInTheDocument();
    });
});


