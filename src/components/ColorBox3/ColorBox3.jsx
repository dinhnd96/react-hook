import React, { useState } from "react";
import "../ColorBox3/ColorBox3.css";
function getRandomColor() {
  const COLOR_LIST = ["gray", "green", "yellow", "orange", "deepblue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}
function ColorBox3() {
  const [color, setColor] = useState("");
  function handleClick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }
  return (
    <div
      className="color-box3"
      style={{ background: color }}
      onClick={handleClick}
    ></div>
  );
}

export default ColorBox3;
