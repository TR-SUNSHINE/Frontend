import { render, screen } from "@testing-library/react";
import MyWalks from "./MyWalksPage";
import { BrowserRouter as Router } from "react-router-dom";




describe("MyWalkPage component", () => {
    afterEach(() => jest.clearAllMocks());
    test(`Given the component is rendered, 
            then the My Walks text should be present`, () => {
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
                <MyWalks />
            </Router>
        );
        expect(screen.getByText("My Walks")).toBeInTheDocument();
    });

    //     test(`Given the component is rendered, 
    //         then the Create Walk button should be present`, () => {
    //         render(
    //             <Router>
    //                 <MyWalksPage />
    //             </Router>
    //         );
    //         expect(screen.getAllByRole("button").find(button => button.textContent === "Create Walk")).toBeInTheDocument();
    //     });
});


