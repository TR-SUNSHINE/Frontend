import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

describe("WelcomePage component", () => {
    afterEach(() => jest.clearAllMocks());

    test("Given a WelcomePage component is rendered, When the component is rendered, The title should be displayed", () => {

        render(<WelcomePage />);

        expect(screen.getByText("Welcome to Sunshine")).toBeInTheDocument();
    });
});