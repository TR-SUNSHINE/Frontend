import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import WelcomePage from "../WelcomePage/WelcomePage";
import IndividualWalk from "../IndividualWalk/IndividualWalk";
import WeatherPage from "../WeatherPage/WeatherPage";
import MyWalksPage from "../MyWalksPage/MyWalksPage";
import TestPage from "../TestPage/TestPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/WelcomePage" />
                    </Route>
                    <Route exact path="/WelcomePage" component={WelcomePage} />
                    <Route exact path="/IndividualWalk" component={IndividualWalk} />
                    <Route exact path="/Weather" component={WeatherPage} />
                    <Route exact path="/MyWalksPage" component={MyWalksPage} />
                    <Route exact path="/TestPage" component={TestPage} />
                    <Route exact path="/NotFoundPage" component={NotFoundPage} />
                    <Route exact path="/RegisterPage" component={RegisterPage} />
                    <Route exact path="/LoginPage" component={LoginPage} />

                </Switch>
            </BrowserRouter>
        </div>
    );
};
export default Routes;