import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import IndividualWalk from "./components/IndividualWalk/IndividualWalk";
import AddWalk from "./components/AddWalk/AddWalk";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import MyWalksPage from "./components/MyWalksPage/MyWalksPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Logout from "./components/Logout/Logout";

function App() {

  const userId = localStorage.getItem("userId");
  const [details, setDetails] = useState({ selectedTime: 0, reminderId: "", reminderTime: 0, userId: userId });

  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/WelcomePage" />
            </Route>
            <Route exact path="/WelcomePage" component={WelcomePage} />
            <Route exact path="/IndividualWalk" component={IndividualWalk} />
            <Route exact path="/AddWalk" component={AddWalk} />
            <Route exact path="/WeatherPage" render={(props) =>
              <WeatherPage
                details={details}
                setDetails={setDetails}
                {...props}
              />}
            />
            <Route exact path="/MyWalksPage" component={MyWalksPage} />
            <Route exact path="/NotFoundPage" component={NotFoundPage} />
            <Route exact path="/RegisterPage" render={(props) =>
              <RegisterPage
                details={details}
                setDetails={setDetails}
                {...props}
              />}
            />
            <Route exact path="/LoginPage" render={(props) =>
              <LoginPage
                details={details}
                setDetails={setDetails}
                {...props}
              />}
            />
            <Route exact path="/Logout" component={Logout} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}
export default App;