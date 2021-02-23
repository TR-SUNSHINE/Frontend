import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Header from "./components/Header/Header";

function App() {
  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={WelcomePage} />
        {/* add other pages here */}
      </BrowserRouter>
    </Container>
  );
}

export default App;
