import React from "react"
import "./index.css";
import ParallaxJSXWrapper from "../ParallaxJSXWrapper";

function Arduino(props) {

    const Section1 = ParallaxJSXWrapper(
      <div className="flex-container">
        <h1><br />Smart Plant</h1>
        <h3>Coming Soon!</h3>
      </div>
      ,1.10);
  return (
      <Section1 />

  );
}

export default Arduino;
