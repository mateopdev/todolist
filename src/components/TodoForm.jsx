import React from "react";
import { useState } from "react";
import { useTodoContext } from "./providers/TodoProvider";

const TodoForm = () => {
  const { getNumberOfTodoItems, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoItem || todoItem.trim() === "") {
      return;
    }

    addTodo(todoItem);

    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Cantidad de tareas: {getNumberOfTodoItems()}</h3>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default TodoForm;
