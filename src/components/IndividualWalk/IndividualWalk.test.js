import { render, screen } from "@testing-library/react";
import IndividualWalk from "./IndividualWalk";

describe("IndividualWalk component", () => {
    afterEach(() => jest.clearAllMocks());

    test(`Given a IndividualWalk component is rendered, When the component is rendered, 
    The title and a description should be displayed`, () => {

        render(<IndividualWalk />);

        expect(screen.getByText("Individual Walk")).toBeInTheDocument();
    });

    test(`Given a IndividualWalk component is rendered, When the component is rendered, a 'Add New Rating' 
    button should be present`, () => {

        render(<IndividualWalk />);
        expect(
            screen
                .getAllByRole("button")
                .find((button) => button.textContent === "Add New Rating")
        ).toBeInTheDocument();
    });
});