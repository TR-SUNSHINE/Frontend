import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";
import { BrowserRouter as Router } from "react-router-dom";

describe("WelcomePage component", () => {

    test("Given a WelcomePage component is rendered, When the component is rendered, The title should be displayed", () => {
        render(
            <Router>
                <WelcomePage />
            </Router>
        );

        expect(screen.getByText("Welcome to Sunshine")).toBeInTheDocument();
    });

    test("Given a WelcomePage component is rendered, When the component is rendered, Two buttons should be displayed", () => {
        render(
            <Router>
                <WelcomePage />
            </Router>
        );

        expect(screen.getAllByRole("button")).toHaveLength(2);
    });
});