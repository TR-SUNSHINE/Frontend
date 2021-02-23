import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import WeatherPage from "./components/WeatherPage/WeatherPage";


function App() {
  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/weather-page" component={WeatherPage} />
        {/* add other pages here */}
      </BrowserRouter>
    </Container>
  );
}

export default App;
