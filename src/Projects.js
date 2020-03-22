import React from "react"
//Import the thumbnail component
import Thumbnail from './Thumbnail.js';
import raspberryPi from './images/raspberryPi.png'
import arduino from './images/arduino.png'
import SeniorProject from './images/SeniorProject.png'
import SystemDiagram from './images/SystemDiagram.png'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
//import Image from 'react-bootstrap/Image'
import './App.css';
 
//Projects component
//The data we pass into the thumbnails are the props
function Projects(props) {
  return (
    // Render the Thumbnail component
    <div className = "Thumbnails">
      <Row>
      <Col xs={12} md={6}>
        <Thumbnail
        link = "/"
        image= {raspberryPi}  className="d-inline-block align-top" alt= "100x100 "
        />
      </Col>
      
      <Col xs={12} md={6}>
        <Thumbnail
        link="/"
        image= {arduino} className="d-inline-block align-top" alt= "100x100 "
        />
      </Col>
      </Row>
      

      <Row>
      <Col xs={12} md={6}>
        <Thumbnail
        link="/"
        image= {SeniorProject} className="d-inline-block align-top" alt= "100x100 "
        />
      </Col>

      <Col xs={12} md={6}>
        <Thumbnail
        link="/"
        image= {SystemDiagram} className="d-inline-block align-bottom"  alt= "100x100 "
        />
      </Col>

      </Row>

    </div>
  )
}
 
export default Projects;