import React from "react";
import { Link } from "react-router-dom"
import "./index.css";

export default class MySectionTitle extends React.Component {
  render() {
    return (
      <div className="section">
        <span className='title'>~<Link className="subDir" to={this.props.subDir}>{this.props.subDir}</Link>{this.props.curDir}</span>
      </div>
    );
  }
}