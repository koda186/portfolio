import React from "react"
//Import the thumbnail component
import Thumbnail from './Thumbnail.js';
import raspberryPi from './images/raspberryPi.png'
import arduino from './images/arduino.jpg'
import SeniorProject from './images/SeniorProject.png'
import SystemDiagram from './images/SystemDiagram.png'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import "./index.css";


//Projects component - Conceptually, components are like JavaScript functions.
//They accept arbitrary inputs (called “props”) and return React elements
//describing what should appear on the screen.
//The data we pass into the thumbnails are the props
//Two ways to define a component, a function or ES6 class

function Projects(props) {
  return (

    // Render the Thumbnail component
    <div className="flex-container">
    <section className="projects" data-section="projects">
      <Container fluid>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={12} md={6}>
            {/*When React sees an element representing a user-defined component,
            it passes JSX attributes and children to this component as a
            single object. We call this object “props”.*/}
            <Thumbnail
            link = "/raspberryPi"
            image= {raspberryPi} alt= "100x100 "
            />
          </Col>

          <Col xs={12} md={6}>
            <Thumbnail
            link = "/arduino"
            image= {arduino} alt= "100x100 "
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Thumbnail
            link = "/"
            image= {SeniorProject} alt= "100x100 "
            />
          </Col>
          <Col xs={12} md={6}>
            <Thumbnail
            link = "/SystemDiagram"
            image= {SystemDiagram} alt= "100x100 "
            />
          </Col>
        </Row>


      </Container>
    </section>
    </div>
  );
}


export default Projects;
