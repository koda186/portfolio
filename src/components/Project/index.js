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
import ReactCursorPosition from 'react-cursor-position';
import PositionLabel from "../ComponentToTrack";
import "./index.css";


//Projects component
//The data we pass into the thumbnails are the props
function Projects(props) {
  return (

    // Render the Thumbnail component
    <div className="flex-container">
    <section className="projects" data-section="projects">
      <Container fluid>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={12} md={6}>
            <ReactCursorPosition className="example">
            <Thumbnail
            link = "/raspberryPi"
            image= {raspberryPi} alt= "100x100 "
            />
            <PositionLabel />
            </ReactCursorPosition>
          </Col>

          <Col xs={12} md={6}>
            <ReactCursorPosition className="example">
            <Thumbnail
            link = "/arduino"
            image= {arduino} alt= "100x100 "
            />
            <PositionLabel />
            </ReactCursorPosition>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <ReactCursorPosition className="example">
            <Thumbnail
            link = "/"
            image= {SeniorProject} alt= "100x100 "
            />
            <PositionLabel />
            </ReactCursorPosition>
          </Col>
          <Col xs={12} md={6}>
            <ReactCursorPosition className="example">
            <Thumbnail
            link = "/SystemDiagram"
            image= {SystemDiagram} alt= "100x100 "
            />
            <PositionLabel />
            </ReactCursorPosition>
          </Col>
        </Row>


      </Container>
    </section>
    </div>
  );
}


export default Projects;
