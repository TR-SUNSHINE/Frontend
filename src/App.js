import logo from "./logo.svg";
import { Button, ButtonToolbar } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="heading heading--main">Welcome to Sunshine</h2>
      </header>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="frame--sunshine">
              <img
                className="img--sunshine"
                src="./images/welcomeSunshine.jfif"
                alt=""
              />
            </div>
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-4">
                <div className="button__container">
                  <Button variant="secondary" className="ml-1">
                    Register
                  </Button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="button__container">
                  <Button variant="secondary" className="ml-1">
                    Login
                  </Button>
                </div>
              </div>
              <div className="col-sm-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
