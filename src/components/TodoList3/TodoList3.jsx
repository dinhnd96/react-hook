import React, { useState } from "react";

const StatelessComponent = () => {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = [...todos, { value }];
    setTodo(newTodo);
    setValue("");
  };
  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add To Do"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
      <div>
        {todos.map((todo, index) => (
          <div key={index} onClick={(index) => deleteTodo(index)}>
            <li>{todo.value}</li>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StatelessComponent;
