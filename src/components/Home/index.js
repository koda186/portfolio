import React from 'react';
import MyEducation from "../Education"
import SectionTitle from "../SectionTitle";
import "./index.css";

export default class Home extends React.Component {
  render() {

    return (
      <div>
        <SectionTitle
          curDir={"/education+skills"}
        />
        <MyEducation />
      </div >
    );
  }
}
