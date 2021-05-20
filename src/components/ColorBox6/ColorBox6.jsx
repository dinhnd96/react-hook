import React, { useState, useEffect } from "react";

function getRandomColor() {
  const COLOR_LIST = ["green", "yellow", "red", "grey", "gray"];
  const RandomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[RandomIndex];
}
function ColorBox6() {
  const [color, setColor] = useState("");
  useEffect(() => {
    document.title = `${color}`;
  });
  function handeEvent() {
    const newColor = getRandomColor();
    setColor(newColor);
  }
  return (
    <div
      className="color-box"
      style={{ background: color }}
      onClick={handeEvent}
    ></div>
  );
}

export default ColorBox6;
