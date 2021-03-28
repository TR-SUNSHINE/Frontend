import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders app", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
