import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App container">

      <BrowserRouter>
        <Route exact path="/" component={WelcomePage} />
        {/* add other pages here */}
      </BrowserRouter>

    </div>
  );
}

export default App;
