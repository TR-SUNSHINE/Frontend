import { waitFor, render, screen, cleanup } from "@testing-library/react";
import IndividualWalk from "./IndividualWalk";
import { BrowserRouter as Router } from "react-router-dom";



describe("IndividualWalk component", () => {

    afterEach(cleanup);

    test(`Given a IndividualWalk component is rendered, Before the component is rendered, 
    The text "Loading... should be displayed`, async () => {

        render(
            <Router>
                <IndividualWalk />
            </Router>
        );

        await waitFor(() => expect(screen.getByText("Loading...")).toBeInTheDocument());


    });
});