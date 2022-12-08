import React from "react";
import TodoProvider from "../../components/providers/TodoProvider";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";

const Home = () => {
  return (
    <>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </>
  );
};

export default Home;
