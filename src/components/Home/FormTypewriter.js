
import React from "react";
import Typewriter from "typewriter-effect";
import "./index.css";


function FormTypewriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Your Challenges Are My Progress.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default FormTypewriter;
