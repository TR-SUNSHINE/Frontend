import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";

function App() {

  const myUserId = "e9f9080b-4626-41db-8504-90896859f8e5";
  const myReminderId = "9af357f1-67cc-4747-a21a-9a74113d7780";

  const getReminders = async () => {

    const reminders = await axios.get(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders`);

    console.log(reminders);
  };

  const getReminder = async () => {

    const reminders = await axios.get(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders/${myReminderId}`);

    console.log(reminders);
  };

  const postReminder = async () => {

    const newTime = {
      reminderTime: "2021-03-21T02:00"
    };

    const addReminder = await axios.post(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders`, newTime);

    console.log(addReminder);
  };

  const updateReminder = async () => {

    const updatedTime = {
      reminderTime: "2021-03-21T14:30"
    };

    const updateReminder = await axios.put(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders/${myReminderId}`, updatedTime);
    console.log(updateReminder);
  };


  const deleteReminder = async () => {
    const deleteReminder = await axios.delete(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders/${myReminderId}`);
    console.log(deleteReminder);
  };

  useEffect(() => {
    getReminders();
    // return () => {

    // }
  }, []);


  return (
    <>
      <Header />
      <Container>

        <Routes />
      </Container>
    </>
  );
}
export default App;