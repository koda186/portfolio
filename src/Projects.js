import React from "react"
//Import the thumbnail component
import Thumbnail from './Thumbnail.js';
import raspberryPi from './images/raspberryPi.png'
import arduino from './images/arduino.jpg'
import SeniorProject from './images/SeniorProject.png'
import SystemDiagram from './images/SystemDiagram.png'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
//import Container from 'react-bootstrap/Container'
//import Image from 'react-bootstrap/Image'
import './App.css';
 
//Projects component
//The data we pass into the thumbnails are the props
function Projects(props) {
  return (
    // Render the Thumbnail component
    <section className="projects" data-section="projects">
      <Row>
      <Col xs={12} md={6}>
        <Thumbnail
        link = "/"
        image= {raspberryPi} alt= "100x100 "
        />
      </Col>
      
      <Col xs={12} md={6}>
        <Thumbnail
        link = "/"
        image= {arduino} alt= "100x100 "
        />
      </Col>

      </Row>
    
      <Row>
      <Col xs={12} md={6}>
        <Thumbnail
        link="/articles"
        image= {SeniorProject} alt= "100x100 "
        />
      </Col>

      <Col xs={12} md={6}>
        <Thumbnail
        link="/"
        image= {SystemDiagram} alt= "100x100 "
        />
      </Col>

      </Row>

    </section>
  );
}
 
export default Projects;