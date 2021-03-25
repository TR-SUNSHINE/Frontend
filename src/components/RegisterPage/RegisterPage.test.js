import { render, screen } from "@testing-library/react";
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
    // test(`Given the email format is invalid, 
    //     then the text "invalid email" isbe present`, () => {
    //     render(
    //         <Router>
    //             <RegisterPage email={requiredDetails.email} />
    //         </Router>
    //     );
    //     expect(screen.getByText("invalid email format ")).toBeInTheDocument();
    // });

});
