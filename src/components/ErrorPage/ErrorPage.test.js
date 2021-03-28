import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("ErrorPage component", () => {

    const mockProps = {
        details: { selectedTime: 0, reminderId: "", reminderTime: 0, userId: "5e37e4d7-d053-4936-8827-01500c10a959" },
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

    test(`Given an ErrorPage component is rendered, When passed the required props, text should be displayed`, async () => {

        render(
            <Router >
                <ErrorPage {...mockProps} />
            </Router>
        );

        const homeButton = screen.getByRole("button");

        expect(screen.getByText("Error")).toBeInTheDocument();
        expect(homeButton).toHaveTextContent("Home");
        expect(screen.getByText("Unable to load reminders")).toBeInTheDocument();

    });
});