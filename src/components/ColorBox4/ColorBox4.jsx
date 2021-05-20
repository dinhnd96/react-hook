import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../ColorBox4/ColorBox4.css";
function getRandomColor() {
  const COLOR_LIST = ["black", "blue", "yellow", "green", "red"];
  const RandomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[RandomIndex];
}
function ColorBox4() {
  const [color, setColor] = useState("");
  useEffect(() => {
    document.title = `${color}`;
  });
  function handleClick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }

  return (
    <div
      className="color-box4"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

export default ColorBox4;
