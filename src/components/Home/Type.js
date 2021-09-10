import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "LAMP Stack Dev",
          "MERN Stack Dev",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
