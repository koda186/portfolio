import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link"

import "./index.css";
import Introduction from "../Introduction";

class MyNav extends React.Component {
  render() {
    return (

      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Robert Allen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Link to router */}
            {/* <Nav.Link as={Link} to="/">~/</Nav.Link> */}
            <Nav.Link as={Link} to="/projects">~/Projects</Nav.Link>
            <Nav.Link as={Link} to="/education">~/Education</Nav.Link>
            <Nav.Link as={Link} to="/about">~/About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Introduction />
          <a href="https://linkedin.com/in/robert-allen-jr-11183382" target="_blank" className="fa fa-linkedin fa-2x" rel="noopener noreferrer" />
          <a href="https://bitbucket.org/rallen186NMR/workspace/projects/" target="_blank" className="fa fa-bitbucket fa-2x" rel="noopener noreferrer" />
          <a href="mailto:rallen6@stedwards.edu" target="_blank" className="fa fa-envelope fa-2x" rel="noopener noreferrer" />

        </Navbar.Collapse>
      </Navbar >
    );
  }
}

export default MyNav;