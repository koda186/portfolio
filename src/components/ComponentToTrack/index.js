import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import Projects from "../Project";
import "./index.css";

const PositionLabel = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    isActive = false,
    isPositionOutside = false,
    position: {
      x = 0,
      y = 0
    } = {}
  } = props;

  return (
    console.log("x: " ,x),
    console.log("y: " ,y),
    console.log("width: " ,width),
    console.log("height: " ,height),
    console.log("isActive: " ,isActive),
    console.log("isPositionOutside: " ,isPositionOutside),
    console.log("isMouseDetected: " ,isMouseDetected),
    console.log("isTouchDetected: " ,isTouchDetected),
    <div className="example__label">
    </div>
  );
};

export default PositionLabel;
