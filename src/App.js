import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";

function App() {

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