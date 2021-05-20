import React, { useState } from "react";
function Todo(props) {
  //   return (
  //     <div>
  //       {props.todos.map((todo) => {
  //         // using props in child component and looping
  //         return <h1>{todo.title}</h1>;
  //       })}
  //     </div>
  //   );
  return (
    <div>
      {props.todos.map((todo) => {
        return <h1>{todo.title}</h1>;
      })}
    </div>
  );
}
function Todolist1() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "game",
    },
    {
      id: 2,
      title: "game2",
    },
    {
      id: 3,
      title: "game3",
    },
  ]);
  function handleClick() {
    setTodo([
      {
        id: 1,
        title: "game3",
      },
      {
        id: 2,
        title: "game23",
      },
      {
        id: 3,
        title: "game33",
      },
    ]);
  }
  return (
    <div>
      <button onClick={handleClick}></button>
      <Todo todos={todos}></Todo>;
    </div>
  );
}

export default Todolist1;
