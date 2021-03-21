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

  //useEffect(() => {
  ///getReminders();
  // return () => {

  // }
  //}, []);

  return (
    <>
      <Header />
      <Container>
        <Routes

        />
      </Container>
    </>
  );
}
export default App;