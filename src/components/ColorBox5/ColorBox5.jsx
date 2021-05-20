import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
function getRandomColor() {
  const COLOR_LIST = ["pink", "orange", "yellow", "green", "blue"];
  const reandomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[reandomIndex];
}
function ColorBox5() {
  const [color, setColor] = useState("");
  function handleChange() {
    const newColor = getRandomColor();
    setColor(newColor);
  }
  return (
    <div
      className="color-box"
      style={{ background: color }}
      onClick={handleChange}
    ></div>
  );
}

export default ColorBox5;
