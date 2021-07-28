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
import ParallaxJSXWrapper from "../ParallaxJSXWrapper";


export default class Home extends React.Component {
  render() {

        const Section1 = ParallaxJSXWrapper(
          <Container fluid className="home-section" id="home">
            <Container className="home-content">
              <Row>
                <Col md={12} className="home-header">
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
                    Check Out
                    <strong className="main-name"> Links Below</strong>
                  </motion.h1>


                  <div style={{ paddingTop: 50, paddingBottom: 10, paddingLeft: 40, textAlign: "center" }}>
                    <a href="https://linkedin.com/in/robert-allen-jr-11183382" target="_blank" className="fa fa-linkedin fa-3x" rel="noopener noreferrer" />
                    <a href="https://bitbucket.org/rallen186NMR/workspace/projects/" target="_blank" className="fa fa-bitbucket fa-3x" rel="noopener noreferrer" />
                    <a href="https://github.com/koda186/portfolio" target="_blank" className="fa fa-github fa-3x" rel="noopener noreferrer" />
                  </div>

                  <div class="downArrow_bounce">
                  <div class="downArrow bounce">
                    <img width="50" height="50" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
                  </div>
                  </div>
                </Col>

              </Row>
            </Container>
          </Container>
        ,.7);

        const Section3 = ParallaxJSXWrapper(
        <div className="section3_EDU" >
            <svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="#EAC79C" viewBox="0 0 100 100" preserveAspectRatio="none" >
                <path d="M0,100 C65,93 76,10 100,100" />
            </svg>
                <div className="section3_header">
                  <h1 className="EDU-name">
                    <strong className="main-name"> Education</strong>
                  </h1>
                </div>
                <div className="section3_container">
                    <Education />
                </div>
            <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="#EAC79C" viewBox="0 0 100 100" preserveAspectRatio="none" >
                <path d="M0,0 C65,20 90,5 100,0" />
            </svg>
        </div>
        ,.3);

        const Section4 = ParallaxJSXWrapper(
          <Container fluid className="home-contact" id="home">
            <Container className="form-content">
              <Row>
                <Col md={12} className="form-name">
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

              {/*<Row>
                <Col md={7} className="form-header">
                  <div style={{paddingBottom: 50, paddingLeft: 0, textAlign: "Left" }}>
                    <FTyping />
                  </div>
                </Col>
              </Row>*/}

            </Container>
          </Container>
        ,.99);


    return (
      <>

      <Particle />
      <section id="section1">
        <Section1 />
      </section>

      <section id="section2">
        <div style={{ paddingTop: 50, paddingBottom: 30, width: 100 }}>
          <div class="typewriter_wrap">
            <Type />
          </div>
        </div>
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
        <Section3 />
        {/*<div class="form-header">
          <FTyping />
        </div>*/}
      </section>

      <section id="section4">
        <Section4 />
      </section>

      </>


    );
  }
}
