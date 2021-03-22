import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { formatReminderTime, formatLocalDateTime } from "./helperFunctions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
<<<<<<< HEAD
import Routes from "./components/Routes/Routes";
// import { DetailsContext } from "./components/Context/Context";
import React, { useState } from "react";

// const details = { userId: "default id" };
// const DetailsContext = React.createContext(details.userId);
=======
import WelcomePage from "./components/WelcomePage/WelcomePage";
import IndividualWalk from "./components/IndividualWalk/IndividualWalk";
import AddWalk from "./components/AddWalk/AddWalk";
import WeatherPage from "./components/WeatherPage/WeatherPage";
import MyWalksPage from "./components/MyWalksPage/MyWalksPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
>>>>>>> main

function App() {
  // const [context, setContext] = useState("default");

  const [selectedTime, setSelectedTime] = useState({ selectedTime: 0, reminderId: "", reminderTime: 0 });

  const [userId, setUserId] = useState("e9f9080b-4626-41db-8504-90896859f8e5");

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
    // <DetailsContext.Provider value={"default id2"}>
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
              />}
            />
            <Route exact path="/MyWalksPage" component={MyWalksPage} />
            <Route exact path="/NotFoundPage" component={NotFoundPage} />
            <Route exact path="/RegisterPage" component={RegisterPage} />
            <Route exact path="/LoginPage" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>
<<<<<<< HEAD
    //</DetailsContext.Provider> 

=======
>>>>>>> main
  );
}
export default App;