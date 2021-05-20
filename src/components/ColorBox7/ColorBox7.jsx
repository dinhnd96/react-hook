import React, { useState, useEffect } from "react";
const getRandomColor = () => {
  const COLOR_LIST = ["green", "yellow", "red", "black", "blue"];
  const RandomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[RandomIndex];
};
function ColorBox7() {
  const [color, setColor] = useState("");

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };
  useEffect(() => {
    document.title = `${color}`;
  });

  return (
    <div
      className="color-box"
      style={{ background: color }}
      onClick={handleClick}
    ></div>
  );
}

export default ColorBox7;
