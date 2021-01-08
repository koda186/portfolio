//import React from 'react';
import React, { useState, useRef } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import Home from "./components/Home";
import MyNav from "./components/NavBar";
import Sidebar from "./components/Sidebar.js";
import Projects from "./components/Project";
import Education from './components/Education'
import About from "./components/About";
import Arduino from "./components/Arduino";
import Introduction from "./components/Introduction";
import FadeExample from "./components/FadeExample";
import Articles from './Articles.js';
//import Resume from "./components/Resume"
//import resumeRobertAllen from "./components/Resume/pdf/resumeRobertAllen.pdf";
//import logo from './logo.svg';
//import linkedIn from './images/linkedIn.png'
//import Nav from './components/Nav.js';




//import ReactDOM from 'react-dom';


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
      <div className='App'>
        <MyNav />
        <Route exact path='/' component={Home} />
        <Route path = "/projects" component = {Projects} />
        <Route path = "/education" component = {Education} />
        <Route path = "/articles" component = {Articles} />
        <Route path = "/about" component = {About} />
        <Route path = "/arduino" component = {Arduino} />
   
        {/*<h4>Resume</h4>*/}
        {/*<Resume pdf={resumeRobertAllen} />*/}

      </div>
        </Particles>
      </div> 
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
