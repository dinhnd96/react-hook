import React from "react";
import Basic from "../src/components/Basic";
import ColorBox from "../src/components/ColorBox/index";
import ColorBox2 from "../src/components/ColorBox2/ColorBox2";
import ColorBox3 from "./components/ColorBox3/ColorBox3";
import ColorBox4 from "./components/ColorBox4/ColorBox4";
import ColorBox5 from "./components/ColorBox5/ColorBox5";
import ColorBox6 from "./components/ColorBox6/ColorBox6";
import ColorBox7 from "./components/ColorBox7/ColorBox7";
import Example from "../src/components/Example/Example";
import Count from "../src/components/TodoList/TodoList";
import Name from "../src/components/Name/Name";
import Todolist1 from "../src/components/TodoList1/Todolist";
import Todolist5 from "../src/components/TodoList5/TodoList5";
import StatelessComponent from "../src/components/TodoList3/TodoList3";
import StatelessComponent2 from "../src/components/TodoList4/TodoList4";
import Validate from "../src/components/Validate/Validate";
import ValidateLowerCase from "../src/components/ValidateLowerCase/ValidateLowerCase";
import ValidationSchemaExample from "../src/components/FormValidate/FormValidate";
import TodoList8 from "../src/components/TodoList8/TodoList8";
import CheckBox from "../src/components/CheckBox/CheckBox";
import LoginControl from "../src/components/LoginControl/LoginControl";
import Lession1 from "../src/components/Lession1/Lession1";

import "./App.css";

function App() {
  return (
    <div>
      <div className="app">
        <h1> Welcome to ToDoList</h1>{" "}
      </div>
      <ColorBox />
      <ColorBox />
      <ColorBox2 />
      <ColorBox3 />
      <ColorBox4 />
      <ColorBox5 />
      <ColorBox6 />
      <Basic />
      <Example />
      <Count />
      <Name />
      <Todolist1 />
      <Validate />
      <ColorBox7 />
      <StatelessComponent />
      <StatelessComponent2 />
      <Todolist5 />
      <ValidateLowerCase />
      <ValidationSchemaExample />
      <TodoList8 />
      <CheckBox />
      <LoginControl />
      <Lession1 />
    </div>
  );
}

export default App;
