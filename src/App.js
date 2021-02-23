import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App container">
      {/* think navbar goes here so appears on all pages, i.e. above the router for individal pages */}
      <BrowserRouter>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/register" component={RegisterPage} />

        {/* add other pages here */}

      </BrowserRouter>

    </div>
  );
}

export default App;
