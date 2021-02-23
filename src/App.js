import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
//import WelcomePage from "./components/WelcomePage/WelcomePage";
import MyWalk from "./components/MyWalksPage/MyWalksPage";

function App() {
  return (
    <Container>
      {/* think navbar goes here so appears on all pages, i.e. above the router for individal pages */}
      <BrowserRouter>
        <Route exact path="/" component={MyWalk} />
        {/* add other pages here */}
      </BrowserRouter>
    </Container>
  );
}

export default App;
