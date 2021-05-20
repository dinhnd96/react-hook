import * as React from "react";
import { useState } from "react";

function TodoList5() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(value);
    setValue("");
  };
  const handleChange = (e) => {
    alert(e.target.value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input
          type="text"
          placeholder="Alert Me!!!!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <label>
          Chọn khóa học:
          <select name="course" onChange={handleChange} value={value}>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="react.js">REACT.JS</option>
          </select>
        </label>
        <button type="submit">Click Me !!!</button>
      </form>
    </div>
  );
}

export default TodoList5;
