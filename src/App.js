import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';


// The react-router-dom library provides a component called 
// BrowserRouter, which synchronizes with the browser and 
// allows a second component, Route, to control which component 
// should appear for which URL. 
// A third component: Link, allows for transitions between routes.
function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Route exact path = "/" component = {Projects} />
        <Route path = "/articles" component = {Articles}/>
        <Route path = "/about" component = {About} />

        
        <div className = "navigation">
          <img src = {logo} className = "logo" alt = "Logo Image" />
          <div className ="navigation-sub">
            
            <Link to = "/" className = "item"> Projects</Link>
            <Link to= "/articles" className = "item"> Articles</Link>
            <Link to = "/about" className = "item"> About</Link>

          </div>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
