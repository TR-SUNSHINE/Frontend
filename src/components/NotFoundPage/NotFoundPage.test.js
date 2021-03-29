import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("NotFOunDPAge component", () => {

    test(`Given the component is rendered, 
            then the PageNot Found text should be present`, () => {
        render(
            <Router>
                <NotFoundPage />
            </Router>
        );
        expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    });


});


