import React from "react";
import { useState } from "react";
import "../ColorBox/ColorBox.css";

ColorBox.propTypes = {};
function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}
function ColorBox() {
  function handeBoxClick() {
    const newColor = getRandomColor();
    setColor(getRandomColor());
    localStorage.getItem("box-color", newColor);
  }
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });
  return (
    <div>
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handeBoxClick}
      ></div>
    </div>
  );
}

export default ColorBox;
