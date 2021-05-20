import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a todo"
      />
    </form>
  );
};

const StatelessComponent2 = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (value) => {
    const newTodos = [...todos, { value }];
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <Form addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <div key={index} onClick={() => deleteTodo(index)}>
            <h1>{todo.value}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default StatelessComponent2;
