import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("LoginPage component", () => {
    afterEach(() => jest.clearAllMocks());
    test(`Given the component is rendered, 
            then the Login to Sunshine text should be present`, () => {
        render(
            <Router>
                <LoginPage />
            </Router>
        );
        expect(screen.getByText("Login to Sunshine")).toBeInTheDocument();
    });

    test(`Given the component is rendered, 
        then the Back button should be present`, () => {
        render(
            <Router>
                <LoginPage />
            </Router>
        );
        expect(screen.getAllByRole("button").find(button => button.textContent === "Back")).toBeInTheDocument();
    });

    test(`Login Button should be disabled when email is empty`, () => {

        const { getByPlaceholderText, getByRole } =
            render(
                <Router>
                    <LoginPage />
                </Router>
            );
        const input = getByPlaceholderText("Enter your email");
        fireEvent.change(input, { "target": { "value": "" } });
        const submitBtn = getByRole("button", { name: "Login" });
        expect(submitBtn).toHaveAttribute("disabled");
    });


    test(`Login Button should not be disabled when email is not empty`, () => {

        const { getByPlaceholderText, getByRole } =
            render(
                <Router>
                    <LoginPage />
                </Router>
            );
        const input = getByPlaceholderText("Enter your email");
        fireEvent.change(input, { "target": { "value": "email@gmail.com" } });
        const submitBtn = getByRole("button", { name: "Login" });
        expect(submitBtn).not.toHaveAttribute("disabled");
    });



});
