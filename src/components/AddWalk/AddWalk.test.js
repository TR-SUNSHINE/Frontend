import { render, screen } from "@testing-library/react";
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
        expect(screen.getByText("Add a Walk")).toBeInTheDocument();
    });
});
