import React from 'react';
import {Link} from 'react-router-dom';
//import linkedIn from '../images/linkedIn.png'
import { Row } from 'react-bootstrap';
//import Image from 'react-bootstrap/Image'
import { Col } from 'react-bootstrap';
//import Navbar from 'react-bootstrap/Navbar'

//import './App.css';
//import App from '../App.js';
//<h3> {linkedIn} className = "linkedIn" alt = "LinkedIn" </h3>


// The react-router-dom library provides a component called 
// BrowserRouter, which synchronizes with the browser and 
// allows a second component, Route, to control which component 
// should appear for which URL. 
// A third component: Link, allows for transitions between routes.
function Nav() {
  
  return (
    <nav>
      <Row>
      <Col xs={3} md={6}>
        <a href="http://linkedin.com/in/robert-allen-jr-11183382">
        <img Image src= "https://img.icons8.com/ios/75/000000/linkedin.png" align = "left"  width="50px"
        height="50px" className="d-inline-block align-top" display= "flex" padding-left= "20px" alt= "100x100 "/>
        </a>
        </Col>
        <Col xs={3} md={2}>
        <Link to = "/" style={{ textDecoration: 'none', fontWeight: "bold", align: "right" }} className = "link"> 
          <li> Projects </li>
        </Link>
        </Col>
        <Col xs={3} md={2}>
        <Link to= "/articles" style={{ textDecoration: 'none', fontWeight: "bold", align: "right" }} className = "link">
          <li> Articles </li>
        </Link>
        </Col>
        <Col xs={3} md={2}>
        <Link to = "/about" style={{ textDecoration: 'none', fontWeight: "bold", align: "right" }} className = "link">
          <li> About</li>
        </Link>
        </Col>
        </Row>
    </nav>

  );
}

export default Nav;
