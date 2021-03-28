import { render, screen } from "@testing-library/react";
import LogoutPage from "./Logout";
import { BrowserRouter as Router } from "react-router-dom";

describe("Logout component", () => {

    test(`Given the component is rendered, 
            then the Logged Out text should be present`, () => {
        render(
            <Router>
                <LogoutPage />
            </Router>
        );
        expect(screen.getByText("Logged Out")).toBeInTheDocument();
    });

    test(`Given the component is rendered, 
        then the Back button should be present`, () => {
        render(
            <Router>
                <LogoutPage />
            </Router>
        );
        expect(screen.getAllByRole("button").find(button => button.textContent === "Login")).toBeInTheDocument();
    });
});


