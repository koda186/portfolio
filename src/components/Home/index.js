import React from 'react';
import Education from "../Education"
import Projects from "../Project";
import "./index.css";

export default class Home extends React.Component {
  render() {

    return (
      <>
      <div className="homeProject">
        <Projects />
        <div className="homeEdu">
          <h2> Education </h2>
          <Education />
        </div>
      </div>
      </>
      
    );
  }
}
