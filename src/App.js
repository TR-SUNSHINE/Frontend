import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";
// import { DetailsContext } from "./components/Context/Context";
import React, { useState } from "react";

// const details = { userId: "default id" };
// const DetailsContext = React.createContext(details.userId);

function App() {
  // const [context, setContext] = useState("default");

  return (
    // <DetailsContext.Provider value={"default id2"}>
    <>
      <Header />
      <Container>

        <Routes />
      </Container>
    </>
    //</DetailsContext.Provider> 

  );
}
export default App;