import React, { useState, useEffect } from "react";

function TodoList8() {
  const [value, setValue] = useState("");
  const [todos, setTodo] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { value }];
    setTodo(newTodos);
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
            <span>{todo.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList8;
