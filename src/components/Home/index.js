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
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import AnimateComponent from "./AnimateOnScroll";

export default class Home extends React.Component {
  /*constructor(props) {
      super(props);
      this.state = {
        isToggled: false
      };
    }*/
  render() {
      /*const { isToggled } = this.props;
      function onPanStart(event, info) {
        console.log(info.point.x, info.point.y)
        this.state.isToggled = true
      }*/
      /*
      function onPanEnd(event, info) {
        console.log(info.point.x, info.point.y)
        this.state.isToggled = false
      }*/
    return (
      <>
      <Particle />
      <section id="section1">

        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <motion.h1 style={{ paddingBottom: 15 }} className="heading"
                initial={{opacity: 0, x: '-250vw'}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 0.2, duration: 1}}
                >
                  Hi There! <span className="wave">👋🏻</span>
                </motion.h1>

                <motion.h1 className="heading-name"
                initial={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 1}}
                >
                  I'm
                  <strong className="main-name"> Robert Allen</strong>
                </motion.h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

            </Row>
          </Container>
        </Container>

      </section>

      <section id="section2">
        <motion.div className="homeProject"
        /*onHoverStart={() => console.log("Hover ends ")}*/
        /*onHoverStart={() => this.setState({isToggled: true})}*/
        /*onHoverEnd={() => this.setState({isToggled: false})}*/
        >
        {/*<AnimatePresence>
        {this.state.isToggled === true && (*/}
            <AnimateComponent>
              <Projects />
            </AnimateComponent>
          {/*)}
        </AnimatePresence>*/}

        </motion.div>
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
