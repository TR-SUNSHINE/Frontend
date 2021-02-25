import "./NaviBar.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import React, { Component } from "react";

export default class NaviBar extends Component {
    render() {
        return (
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
        );
    }
};