import React, { useState } from "react";
function CheckBox() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    alert(
      `tham gia ${checked}
      họ tên: ${value}
      Khoa hoc : ${option}
      message: ${message}`
    );
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tham gia:
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </label>
      <br />

      <label>
        Ghi rõ họ tên:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <br />

      <label>
        Chọn khóa học:
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JAVASCRIPT</option>
          <option value="react.js">REACT.JS</option>
        </select>
      </label>
      <br />

      <label>
        Message:
        <textarea
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default CheckBox;
