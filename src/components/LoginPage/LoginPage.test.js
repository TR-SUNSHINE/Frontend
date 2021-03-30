
import { fireEvent, render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from "react-router-dom";


const mockDetails = { selectedTime: 0, reminderId: "", reminderTime: 0, userId: "5e37e4d7-d053-4936-8827-01500c10a959", email: "", userName: "", emailError: "", loginError: "" };

const setMockDetails = jest.fn();

const mockProps = {

    history: {
        length: 16, action: "POP",
        location: {
            hash: "",
            pathname: "/ErrorPage",
            search: "",
            state: ""
        },
        createHref: {},
        push: {}
    },
    location: {
        pathname: "/ErrorPage",
        search: "",
        hash: "",
        state: { message: "Unable to load reminders" }
    },
    match: { path: "/ErrorPage", url: "/ErrorPage", isExact: true, params: {} },
    setDetails: {},
};

describe("LoginPage component", () => {

    test(`Given the component is rendered, 
            then the Login to Sunshine text should be present`, () => {
        render(
            <Router>
                <LoginPage {...mockProps} details={mockDetails} setDetails={setMockDetails} />
            </Router>
        );
        expect(screen.getByText("Login to Sunshine")).toBeInTheDocument();
    });

    test(`Given the component is rendered, 
        then the Back button should be present`, () => {
        render(
            <Router>
                <LoginPage {...mockProps} details={mockDetails} setDetails={setMockDetails} />
            </Router>
        );
        expect(screen.getAllByRole("button").find(button => button.textContent === "Back")).toBeInTheDocument();
    });

    test(`Login Button should be disabled when email is empty`, () => {

        const { getByPlaceholderText, getByRole } =
            render(
                <Router>
                    <LoginPage {...mockProps} details={mockDetails} setDetails={setMockDetails} />
                </Router>
            );
        const input = getByPlaceholderText("Enter your email");
        fireEvent.change(input, { "target": { "value": "" } });
        const submitBtn = getByRole("button", { name: "Login" });
        expect(submitBtn).toHaveAttribute("disabled");
    });


    test(`Login Button should not be disabled when email is not empty`, () => {

        const mockDetailsWithEmail = { selectedTime: 0, reminderId: "", reminderTime: 0, userId: "5e37e4d7-d053-4936-8827-01500c10a959", email: "bob@bobsmith.co.uk", userName: "", emailError: "", loginError: "" };

        const { getByPlaceholderText, getByRole } =
            render(
                <Router>
                    <LoginPage {...mockProps} details={mockDetailsWithEmail} setDetails={setMockDetails} />
                </Router>
            );
        const input = getByPlaceholderText("Enter your email");
        fireEvent.change(input, { "target": { "value": "email@gmail.com" } });
        const submitBtn = getByRole("button", { name: "Login" });
        expect(submitBtn).not.toHaveAttribute("disabled");
    });



});
