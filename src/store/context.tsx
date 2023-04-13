import React, { useState } from "react";
import { Todo } from "../todo.model";

interface TodosCtxProviderProps {
  children: React.ReactNode;
}
type TodoType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosCtxProvider: React.FC<TodosCtxProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHndl = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const todoDelHdl = (tdId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== tdId);
    });
  };

  const contextValue: TodoType = {
    items: todos,
    addTodo: todoAddHndl,
    removeTodo: todoDelHdl,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
export default TodosCtxProvider;
