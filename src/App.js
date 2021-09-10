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
import RaspPI from "./components/RaspPI";
import SystemDiagram from "./components/SystemDiagram";
import ScrollToTop from "./components/ScrollToTop"

// The react-router-dom library provides a component called
// BrowserRouter, which synchronizes with the browser and
// allows a second component, Route, to control which component
// should appear for which URL.

// A third component: Link, allows for transitions between routes.

// A <Switch> looks through its children <Route>s and
// renders the first one that matches the current URL. */}
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
        <Route path = "/raspberryPi" component = {RaspPI} />
        <Route path = "/arduino" component = {Arduino} />
        <Route path = "/SystemDiagram" component = {SystemDiagram} />

        </Switch>
      </div>

    </Router>

  );
}



export default App;
