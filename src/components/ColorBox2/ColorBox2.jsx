import React from "react";
import { useState } from "react";
import "../ColorBox2/ColorBox2.css";

function ColorBox2() {
  const [color, setColor] = useState("");
  function handleClick() {
    const newColor = getRandomColor();
    setColor(newColor);
  }
  function getRandomColor() {
    const COLORLIST = [
      "back",
      "purple",
      "deeppink",
      "cyan",
      "gold",
      "gray",
      "grey",
    ];
    const randomIndex = Math.trunc(Math.random() * 6);
    return COLORLIST[randomIndex];
  }
  return (
    <div
      className="color-box2"
      style={{ background: color }}
      onClick={handleClick}
    ></div>
  );
}

export default ColorBox2;
