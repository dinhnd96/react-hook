import React, { useState, useEffect } from "react";
function Todo(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        // using props in child component and looping
        return <h1>{todo.title}</h1>;
      })}
    </div>
  );
}
function Name() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is first list",
    },
    {
      id: 2,
      title: "This is second list",
    },
    {
      id: 3,
      title: "This is third list",
    },
  ]);

  function handleClick() {
    setTodos([
      {
        id: 3,
        title: "This is forth list",
      },
      {
        id: 4,
        title: "This is fifth list",
      },
      {
        id: 5,
        title: "This is sixth list",
      },
    ]);
  }
  return (
    <div className="App">
      <h1 onClick={handleClick}>Troll</h1>
      <Todo todos={todos} /> //This is how i'm passing props in parent component
    </div>
  );
}

export default Name;
