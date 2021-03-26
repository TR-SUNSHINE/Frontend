import { render, fireEvent, screen } from "@testing-library/react";
import AddWalk from "./AddWalk";
import { BrowserRouter as Router } from 'react-router-dom';

describe("AddWalk component", () => {
    afterEach(() => jest.clearAllMocks());

    test(`Given the component is rendered, 
            then the Add Walk text should be present`, () => {
        jest.mock("axios", () => {
            return {
                interceptors: {
                    request: { use: jest.fn(), eject: jest.fn() },
                    response: { use: jest.fn(), eject: jest.fn() },
                },
            };
        });

        render(
            <Router>
                <AddWalk />
            </Router>
        );
        expect(screen.getByText("Add Walk")).toBeInTheDocument();
    });

    // test(`Given the component is rendered, 
    //     then the Back button should be present`, () => {
    //     render(
    //         <Router>
    //             <RegisterPage />
    //         </Router>
    //     );
    //     expect(screen.getAllByRole("button").find(button => button.textContent === "Back")).toBeInTheDocument();
    // });

    // test(`Register Button should be disabled when email and userName are empty`, () => {

    //     const { getByPlaceholderText, getByRole } =
    //         render(
    //             <Router>
    //                 <RegisterPage />
    //             </Router>
    //         );
    //     const input1 = getByPlaceholderText("Enter your email");
    //     fireEvent.change(input1, { "target": { "value": "" } });
    //     const input2 = getByPlaceholderText("Enter your name");
    //     fireEvent.change(input2, { "target": { "value": "" } });

    //     const submitBtn = getByRole("button", { name: "Register" });
    //     expect(submitBtn).toHaveAttribute("disabled");
    // });

    // test(`Register Button should not be disabled when email and userName are not empty`, () => {

    //     const { getByPlaceholderText, getByRole } =
    //         render(
    //             <Router>
    //                 <RegisterPage />
    //             </Router>
    //         );
    //     const input1 = getByPlaceholderText("Enter your email");
    //     fireEvent.change(input1, { "target": { "value": "email@email.com" } });
    //     const input2 = getByPlaceholderText("Enter your name");
    //     fireEvent.change(input2, { "target": { "value": "a_name" } });

    //     const submitBtn = getByRole("button", { name: "Register" });
    //     expect(submitBtn).not.toHaveAttribute("disabled");
    // });
});
