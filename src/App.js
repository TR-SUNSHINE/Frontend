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

  const getReminders = async () => {

    const reminders = await axios.get(`https://ia7thtfozg.execute-api.eu-west-2.amazonaws.com/users/${myUserId}/reminders`);

    console.log(reminders);
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