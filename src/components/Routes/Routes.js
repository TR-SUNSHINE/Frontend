/*
import Location from "../Location/Location";
import Reminders from "../Reminders/Reminders";
import AddWalksPage from "../AddWalksPage/AddWalksPage";
import Logout from "../Logout/Logout";
*/
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import WelcomePage from "../WelcomePage/WelcomePage";
import IndividualWalkPage from "../IndividualWalkPage/IndividualWalkPage";
import WeatherPage from "../WeatherPage/WeatherPage";
import MyWalksPage from "../MyWalksPage/MyWalksPage";
import TestPage from "../TestPage/TestPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/WelcomePage" />
                    </Route>
                    <Route exact path="/WelcomePage" component={WelcomePage} />
                    {/*
                    <Route exact path="/Location" component={Location} />
                    <Route exact path="/Reminders" component={Reminders} />
                    <Route exact path="/AddWalksPage" component={AddWalksPage} />
                    <Route exact path="/Logout" component={Logout} />
                    */}
                    <Route exact path="/IndividualWalkPage" component={IndividualWalkPage} />
                    <Route exact path="/Weather" component={WeatherPage} />
                    <Route exact path="/MyWalksPage" component={MyWalksPage} />
                    <Route exact path="/TestPage" component={TestPage} />
                    <Route exact path="/NotFoundPage" component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};
export default Routes;


