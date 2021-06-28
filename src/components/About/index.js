import React from "react"
//Import the thumbnail component
import {Container} from 'react-bootstrap';
import Thumbnail from './Thumbnail.js';
import raspberryPi from './images/raspberryPi.png'
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
 
//About component
//The data we pass into the thumbnails are the props
function About(props) {
  return (
    // Render the Thumbnail component
    <div className="About" data-section="about">
      <Container fluid>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={12} md={6}>
            <Thumbnail
            link = "/"
            image= {raspberryPi} alt= "100x100 "
            />
          </Col>
        </Row>

      </Container>
    </div>
  );
}
 
export default About;