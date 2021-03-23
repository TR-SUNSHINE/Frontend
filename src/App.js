import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { formatReminderTime, formatLocalDateTime } from "./helperFunctions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import axios from "axios";
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

function App() {

  const [selectedTime, setSelectedTime] = useState({ selectedTime: 0, reminderId: "", reminderTime: 0 });
  // const [userId, setUserId] = useState("");
  const [userId, setUserId] = useState("2804f8e1-8b27-4d4a-841b-64b3b3d440be");

  const getReminders = async () => {
    console.log(userId);
    const reminders = await axios.get(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${userId}/reminders`);

    if (reminders.data.length) {

      const latestReminder = reminders.data[reminders.data.length - 1];
      const latestReminderTime = formatLocalDateTime(latestReminder.reminderTime);
      const timeNow = formatReminderTime(Math.floor(Date.now() / 1000)) + "Z";
      const latestReminderTimeUnix = Date.parse(latestReminderTime) / 1000;

      if (latestReminderTime > timeNow) {
        const copySelectedTime = { ...selectedTime };
        copySelectedTime.reminderTime = latestReminderTimeUnix;
        copySelectedTime.reminderId = latestReminder.reminderId;
        setSelectedTime(copySelectedTime);

      } else {
        console.log("reminder in past");
      }

    }

    console.log(reminders);

  };

  useEffect(() => {
    getReminders();
  }, []);

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
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                userId={userId}
                {...props}
              />}
            />
            <Route exact path="/MyWalksPage" component={MyWalksPage} />
            <Route exact path="/NotFoundPage" component={NotFoundPage} />
            <Route exact path="/RegisterPage" render={() =>
              <RegisterPage
                userId={userId}
                setUserId={setUserId}
              />}
            />
            <Route exact path="/LoginPage" render={(props) =>
              <LoginPage
                userId={userId}
                setUserId={setUserId}
                {...props}
              />}
            />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}
export default App;