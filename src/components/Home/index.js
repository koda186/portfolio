import React from 'react';
import MyEducation from "../Education"
import SectionTitle from "../SectionTitle";
import Projects from "../Project";
import "./index.css";

export default class Home extends React.Component {
  render() {

    return (
      <div>
        <Projects/>
        <SectionTitle
          curDir={"/education"}
        />
        <MyEducation />
      </div >
    );
  }
}
