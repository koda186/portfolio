import React from 'react';
//import React, { useState, useRef } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Home from "./components/Home";
import MyNav from "./components/NavBar";
import Projects from "./components/Project";
import Education from './components/Education'
import About from "./components/About";
import Arduino from "./components/Arduino";
import ScrollToTop from "./components/ScrollToTop"


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
      <div className="App">
        <ScrollToTop />
        <MyNav />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path = "/projects" component = {Projects} />
        <Route path = "/education" component = {Education} />
        <Route path = "/about" component = {About} />
        <Route path = "/arduino" component = {Arduino} />
        </Switch>
      </div>

    </Router>

  );
}



export default App;
