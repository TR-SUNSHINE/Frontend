import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router } from 'react-router-dom';

describe("LoginPage component", () => {

    test(`Given the component is rendered, 
            then the Login to Sunshine text should be present`, () => {
        render(
            <Router>
                <LoginPage />
            </Router>
        );
        expect(screen.getByText("Login to Sunshine")).toBeInTheDocument();
    });
<<<<<<< HEAD
    test(`Given the component is rendered, 
        then the Back button should be present`, () => {
        render(
            <Router>
                <LoginPage />
            </Router>
        );
        expect(screen.getAllByRole("button").find(button => button.textContent === "Back")).toBeInTheDocument();
    });

    test(`Given the required props,
when the component is rendered, 
then the Login button should be present`, () => {
        const email = "email@email.com";

    }


    );

=======
    // test(`Given the component is rendered, 
    //     then the Back button should be present`, () => {
    //     render(
    //         <Router>
    //             <LoginPage />
    //         </Router>
    //     );
    //     expect(screen.getAllByRole("button").find(button => button.textContent === "Back").length).toBe(1);
    // });

    test(`Given the required props,
when the component is rendered, 
then the Login button should be present`, () => { }
    );
>>>>>>> 1034a7b3255944ce54dd0f83653bbf467a48e0aa
    test(`Given the email input ,
when the component is rendered, 
then the Login button should be enabled`, () => { }
    );
    test(`Given the absence of email,
when the component is rendered, 
then the Login button should be disabled`, () => { }
    );
    test(`Given the email is rendered,
when the login task is clicked, 
then the submit function is called with the correct email`, () => { }
    );
});
