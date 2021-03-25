import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from 'react-router-dom';

describe("LoginPage component", () => {

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

    test(`Given the user enter an invalid email format,
    the invalid email format text should be present`, () => {

        const { getByPlaceholderText, getByRole } =
            render(
                <Router>
                    <LoginPage />
                </Router>
            );
        const input = getByPlaceholderText("Enter your email");
        fireEvent.change(input, { "target": { "value": "emailaddress" } });
        expect(screen.getByText("invalid email format")).toBeInTheDocument();
    });




    test(`Given the absence of email,
when the component is rendered, 
then the Login button should be disabled`, () => { }
    );
    test(`Given the email is rendered,
when the login task is clicked, 
then the submit function is called with the correct email`, () => { }
    );
});
