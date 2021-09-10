import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "react-router-dom/Link"
import { Link as Link2 } from 'react-scroll';

import "./index.css";
import Introduction from "../Introduction";


class MyNav extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        navExpanded: false
      };
    }

    setNavExpanded = (expanded) => {
      this.setState({ navExpanded: expanded });
    }

    setNavClose = () => {
      this.setState({ navExpanded: false });
    }

  render() {
    return (


      <Navbar fixed="top" expand="lg" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
      <Navbar.Brand as={Link} className= "section" to="/">~/RobertAllen</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
            {/* Link to router */}
            {/* <Nav.Link as={Link} to="/">Robert Allen</Nav.Link>

            <Nav.Link as={Link} to="/projects">~/Projects</Nav.Link>
            <Nav.Link as={Link} to="/education">~/Education</Nav.Link>
            <Nav.Link as={Link} to="/about">~/About</Nav.Link>
            */}
            <Link2 activeClass="active" className= "section" to="section2" spy={true} smooth={true} offset={0} duration={800}>
              ~/Projects
            </Link2>
            <Link2 activeClass="active" className= "section" to="section3" spy={true} smooth={true} offset={-100} duration={800}>
              ~/Education
            </Link2>
            <Link2 activeClass="active" className= "section" to="section4" spy={true} smooth={true} offset={300} duration={800}>
              ~/Contact
            </Link2>
            {/*
            <Nav.Link as={Link} to="/projects">~/Projects</Nav.Link>
            <Nav.Link as={Link} to="/education">~/Education</Nav.Link>
            <Nav.Link as={Link} to="/about">~/About</Nav.Link>
            */}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Introduction />
          <a href="https://linkedin.com/in/robert-allen-jr-11183382" target="_blank" className="fa fa-linkedin fa-2x" rel="noopener noreferrer" aria-hidden="true" />
          <a href="https://bitbucket.org/rallen186NMR/workspace/projects/" target="_blank" className="fa fa-bitbucket fa-2x" rel="noopener noreferrer" aria-hidden="true" />
          <a href="https://github.com/koda186/portfolio" target="_blank" className="fa fa-github fa-2x" rel="noopener noreferrer" aria-hidden="true" />
          {/*<a href="mailto:rallen6@stedwards.edu" target="_blank" className="fa fa-envelope fa-2x" rel="noopener noreferrer" />*/}

        </Navbar.Collapse>
      </Navbar >
    );
  }
}

export default MyNav;
