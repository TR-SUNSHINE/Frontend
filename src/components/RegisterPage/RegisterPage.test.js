import { render, fireEvent, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import { BrowserRouter as Router } from 'react-router-dom';

describe("RegisterPage component", () => {
    afterEach(() => jest.clearAllMocks());
    const requiredDetails = { email: "aaa@bbb", userName: "Alice" }
    test(`Given the component is rendered, 
            then the Register with Sunshine text should be present`, () => {
        render(
            <Router>
                <RegisterPage />
            </Router>
        );
        expect(screen.getByText("Register with Sunshine")).toBeInTheDocument();
    });
    test(`Given the component is rendered, 
        then the Back button should be present`, () => {
        render(
            <Router>
                <RegisterPage />
            </Router>
        );
        expect(screen.getAllByRole("button").find(button => button.textContent === "Back")).toBeInTheDocument();
    });

    test(`Register Button should be disabled when email and userName are empty`, () => {

        const { getByPlaceholderText, getByRole } =
            render(
                <Router>
                    <RegisterPage />
                </Router>
            );
        const input1 = getByPlaceholderText("Enter your email");
        fireEvent.change(input1, { "target": { "value": "" } });
        const input2 = getByPlaceholderText("Enter your name");
        fireEvent.change(input2, { "target": { "value": "" } });

        const submitBtn = getByRole("button", { name: "Register" });
        expect(submitBtn).toHaveAttribute("disabled");
    });
});
