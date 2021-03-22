import { useState, useEffect, createContext } from "react";
import { formatReminderTime, formatLocalDateTime } from "./helperFunctions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";

function App() {

  const myUserId = "e9f9080b-4626-41db-8504-90896859f8e5";
  const [selectedTime, setSelectedTime] = useState({ selectedTime: 0, reminderId: "", reminderTime: 0, userId: "" });

  const getReminders = async () => {

    const reminders = await axios.get(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders`);

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
        <Routes />
      </Container>

    </>

  );
}
export default App;