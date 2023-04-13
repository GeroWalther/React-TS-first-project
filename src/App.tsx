import React from "react";
import TodoList from "./comp/TodoList";
import NewTodo from "./comp/NewTodo";
import TodosCtxProvider from "./store/context";

const App: React.FC = () => {
  return (
    <TodosCtxProvider>
      <h1>hello typescript</h1>
      <NewTodo />
      <TodoList />
    </TodosCtxProvider>
  );
};

export default App;
