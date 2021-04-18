import React from 'react';
import Education from "../Education"
import Projects from "../Project";
import Form from "../ContactForm";
import "./index.css";
import Particle from "../Particles";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import FTyping from "./FormTypewriter";
import homeLogo from "../../images/HomePageJourney.png";
import "bootstrap/dist/css/bootstrap.min.css";


export default class Home extends React.Component {
  render() {

    return (
      <>
      <section id="section1">
            <Particle />
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Robert Allen</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

            </Row>
          </Container>
        </Container>

      </section>

      <section id="section2">
        <div className="homeProject">
          <Projects />
          </div>
      </section>

      <section id = "section3">
        <div className="homeEdu">
          <h1 className="EDU-name">
            <strong className="main-name"> Education</strong>
          </h1>
            <Education />
        </div>
      </section>


      <section id="section4">
            <Particle />
        <Container fluid className="home-section" id="home">
          <Container className="form-content">
            <Row>
              <Col md={12} className="form-header">
                <h1 className="form-name">
                  <strong className="main-name"> Let's Chat</strong>
                </h1>
              </Col>
            </Row>

            <Row>
              <Col md={6} style={{ paddingBottom: 20 }}>
                <Form />
              </Col>

              <Col md={6} style={{ paddingTop: 0 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>

            <Row>
              <Col md={7} className="form-header">
                <div style={{paddingBottom: 50, paddingLeft: 0, textAlign: "Left" }}>
                  <FTyping />
                </div>
              </Col>
            </Row>

          </Container>
        </Container>

      </section>
      </>

    );
  }
}
