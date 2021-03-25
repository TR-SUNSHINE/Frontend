import { render, screen } from "@testing-library/react";
import IndividualWalk from "./IndividualWalk";
import { BrowserRouter as Router } from 'react-router-dom';

describe("IndividualWalk component", () => {
    afterEach(() => jest.clearAllMocks());

    test(`Given a IndividualWalk component is rendered, When the component is rendered, 
    The title and a description should be displayed`, () => {

        render(
            <Router>
                <IndividualWalk />
            </Router>
        );
        expect(screen.getByText("Individual Walk")).toBeInTheDocument();
    });

    test(`Given a IndividualWalk component is rendered, When the component is rendered, a 'Add New Rating' 
    button should be present`, () => {

        render(
            <Router>
                <IndividualWalk />
            </Router>
        );
        expect(
            screen
                .getAllByRole("button")
                .find((button) => button.textContent === "Rate Walk")
        ).toBeInTheDocument();
    });
});