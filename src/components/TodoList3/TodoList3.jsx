import React, { useState } from "react";

const StatelessComponent = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { value }];
    setTodos(newTodos);
    setValue("");
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
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
            <h1>{todo.value}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StatelessComponent;
