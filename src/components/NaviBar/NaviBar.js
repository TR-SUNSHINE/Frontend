import "./NaviBar.css";
import Row from "react-bootstrap/Row";
import { Nav, Navbar } from "react-bootstrap";

function NaviBar() {
    return (
        <Row>
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
                    <Nav.Link eventKey="/IndividualWalksPage">Individual Walk</Nav.Link>
                    <Nav.Link href="/Logout">Logout</Nav.Link>
                    <Nav.Link href="/TestPage">TestPage</Nav.Link>
                </Nav>
            </Navbar>
        </Row>
    );
}

export default NaviBar;
