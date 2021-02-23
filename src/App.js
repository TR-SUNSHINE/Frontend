import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import Routes from "./components/Routes/Routes";
import NaviBar from "./components/NaviBar/NaviBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <NaviBar />
        </Col>
        <Col>
          <Routes />
        </Col>
        <Col>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
