import React, { useState, useEffect } from "react";

function Validate() {
  const [value, setValue] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");

  function handleSubmit(event) {
    alert(`your name is   ${value} `);
    alert(`your fullName is  ${Name}`);
    alert(` your Age is ${Age}`);
    event.preventDefault();
  }
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeAge(event) {
    setAge(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" onChange={handleChange} />
        </label>
        <label>
          FullName
          <input type="text" onChange={handleChangeName} />
        </label>
        <label>
          Age
          <input type="text" onChange={handleChangeAge} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Validate;
// class Validate extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// export default Validate;
