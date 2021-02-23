import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import WelcomePage from "../WelcomePage/WelcomePage";
/*
import Location from "../Location/Location";
import Weather from "../Weather/Weather";
import Reminders from "../Reminders/Reminders";
import MyWalksPage from "../MyWalksPage/MyWalksPage";
import AddWalksPage from "../AddWalksPage/AddWalksPage";
import IndividualWalksPage from "../IndividualWalksPage/IndividualWalksPage";
import Logout from "../Logout/Logout";
*/
import TestPage from "../TestPage/TestPage";

function Routes() {
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
                    <Route exact path="/Weather" component={Weather} />
                    <Route exact path="/Reminders" component={Reminders} />
                    <Route exact path="/MyWalksPage" component={MyWalksPage} />
                    <Route exact path="/AddWalksPage" component={AddWalksPage} />
                    <Route exact path="/IndividualWalksPage" component={IndividualWalksPage} />
                    <Route exact path="/Logout" component={Logout} />
                    */}
                    <Route exact path="/TestPage" component={TestPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default Routes;


