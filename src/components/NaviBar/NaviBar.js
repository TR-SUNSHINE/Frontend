import "./NaviBar.css";
import { Nav, Navbar } from "react-bootstrap";
const Navibar = () => {
    return (
        <Navbar fixed="top" expand="md" variant="light" bg="light" className="cust-nav-bar">
            <Navbar.Brand href="#home">
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <img
                    src="./images/welcomeSunshine.jfif"
                    width="30"
                    height="30"
                    className="d-inline-block align-top-right navbar__img"
                    alt="Sun"
                />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="/WeatherPage">Weather</Nav.Link>
                    <Nav.Link href="/MyWalksPage">My Walks</Nav.Link>
                    <Nav.Link href="/Logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default Navibar;