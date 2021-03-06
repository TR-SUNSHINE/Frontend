import "./NaviBar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navibar = () => {
    return (
        <Navbar fixed="top" bg="light" expand="lg" className="cust-nav-bar">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/WeatherPage">My Weather</Nav.Link>
                    <Nav.Link href="/Reminders">Reminders</Nav.Link>
                    <Nav.Link href="/MyWalksPage">My Walks</Nav.Link>
                    <Nav.Link href="/Logout">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navibar;