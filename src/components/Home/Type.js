import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Click A Project Image Below:",
          "Software Engineer:",
          "MEAN Stack Developer",
          "LAMP Stack Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
