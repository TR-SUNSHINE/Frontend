import { render, screen } from "@testing-library/react";
import NaviBar from "./NaviBar";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navbar component", () => {

    test(`Given the component is rendered, 
            then the text present in the navbar links should be present`, () => {
        render(
            <Router>
                <NaviBar />
            </Router>
        );
        expect(screen.getByText("Weather")).toBeInTheDocument();
        expect(screen.getByText("My Walks")).toBeInTheDocument();
        expect(screen.getByText("Add Walk")).toBeInTheDocument();
        expect(screen.getByText("Logout")).toBeInTheDocument();
    });

});


