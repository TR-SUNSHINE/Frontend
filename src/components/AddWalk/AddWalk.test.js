import { waitFor, render, screen, cleanup } from "@testing-library/react";
import AddWalk from "./AddWalk";
import { BrowserRouter as Router } from "react-router-dom";

describe("AddWalk component", () => {

    afterEach(cleanup);

    test(`Given am AddWalk component is rendered, Before the component is rendered, 
    The text "Loading... should be displayed`, async () => {

        render(
            <Router>
                <AddWalk />
            </Router>
        );

        await waitFor(() => expect(screen.getByText("Loading...")).toBeInTheDocument());

    });
});