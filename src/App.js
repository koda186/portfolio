//import React from 'react';
//import logo from './logo.svg';
//import linkedIn from './images/linkedIn.png'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav.js';
import Home from "./components/Home"
import Sidebar from './components/Sidebar.js';
import Projects from './Projects';
import Articles from './Articles.js';
import About from './About.js';
import Arduino from './Arduino.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Introduction from './components/Introduction';
import FadeExample from './components/FadeExample';


import React, { useState, useRef } from 'react';
//import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import './styles.scss';


// The react-router-dom library provides a component called 
// BrowserRouter, which synchronizes with the browser and 
// allows a second component, Route, to control which component 
// should appear for which URL. 
// A third component: Link, allows for transitions between routes.
function App() {
  return (
    <Router>

      <div className="main">
        <Particles>
          <div className="App">

            <div className="flex-container">
  
              <div className="page-container">
                <Nav />
              </div>

              <div id="page"> 
                <div id="container-wrap">
                  <section className="items" data-section="items">
                      {/*<Switch>*/}
                      
                        <Route exact path = "/" component = {Projects} />
                        <Route path = "/articles" component = {Articles}/>
                        <Route path = "/about" component = {About} />
                        <Route path = "/arduino" component = {Arduino} />
                      {/*<Switch>*/}
                      
                      {/* <Route exact path='/' component={Home} /> 

                        <Route exact path = "/" component = {Projects} />
                        <Route path = "/articles" component = {Articles}/>
                        <Route path = "/about" component = {About} />
                        <Route path = "/arduino" component = {Arduino} /> 
                      */}

                  </section>

                </div>
                
                <Introduction />
              </div>
            </div> 
            <div className="education">
            <Route exact path = "/" component = {Home} />
            </div>
          </div> ///app

        </Particles>
      </div> //main

    </Router>
  );
}


function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}


export default App;
