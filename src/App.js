import React from 'react';
//import logo from './logo.svg';
//import linkedIn from './images/linkedIn.png'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav.js';
import Sidebar from './components/Sidebar.js';
import Projects from './Projects';
import Articles from './Articles.js';
import About from './About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Introduction from './components/Introduction';


// The react-router-dom library provides a component called 
// BrowserRouter, which synchronizes with the browser and 
// allows a second component, Route, to control which component 
// should appear for which URL. 
// A third component: Link, allows for transitions between routes.
function App() {
  return (
    <Router>
      <div className="App">
        <div className="flex-container">
          
          <div className="container">
              <Nav />
          </div>

          <div className="page">
            <Sidebar />
          </div>

                  
            <div id="colorlib-page">
              <div id="container-wrap">
                <section className="main" data-section="main">
                  <Introduction />
                    <Switch>
                      <Route exact path = "/" component = {Projects} />
                      <Route path = "/articles" component = {Articles}/>
                      <Route path = "/about" component = {About} />
                    </Switch>
                </section>
              </div>
            </div>

        </div>

      </div>
    </Router>
  );
}

export default App;
