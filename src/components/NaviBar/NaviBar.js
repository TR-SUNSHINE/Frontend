import "./NaviBar.css";
import Row from "react-bootstrap/Row";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const NaviBar = () => {
    return (
        <Row>
            <Navbar fixed="right" bg="light" expand="lg" className="cust-nav-bar">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/WeatherPage">My Weather</Nav.Link>
                        <Nav.Link href="/Location">Location</Nav.Link>
                        <Nav.Link href="/Reminders">Reminders</Nav.Link>
                        <Nav.Link href="/MyWalksPage">My Walks</Nav.Link>
                        <Nav.Link href="/AddWalksPage">Add Walks</Nav.Link>
                        <Nav.Link href="/IndividualWalk">Individual Walk</Nav.Link>
                        <Nav.Link href="/Logout">Logout</Nav.Link>
                        <Nav.Link href="/TestPage">TestPage</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {
            /*
                <Navbar fixed="left" expand="lg" variant="dark" className="cust-nav-bar">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                <Nav defaultActiveKey="/WelcomePage" className="flex-column">
                    <Nav.Link href="/WelcomePage">Home</Nav.Link>
                    <Nav.Link href="/Location">Location</Nav.Link>
                    <Nav.Link href="/Weather">Weather</Nav.Link>
                    <Nav.Link href="/Reminders">Reminders</Nav.Link>
                    <Nav.Link href="/MyWalksPage">My Walks</Nav.Link>
                    <Nav.Link href="/AddWalksPage">Add Walks</Nav.Link>
                    <Nav.Link href="/IndividualWalk">Individual Walk</Nav.Link>
                    <Nav.Link href="/Logout">Logout</Nav.Link>
                    <Nav.Link href="/TestPage">TestPage</Nav.Link>
                </Nav>
            </Navbar>
            */ }
        </Row>
    );
};

export default NaviBar;
