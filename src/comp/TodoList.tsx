import React, { useContext } from "react";
import "./TodoList.css";
import { TodosContext } from "../store/context";

// only without Context to define prop types
// interface TodolistProps {
//   items: { id: string; text: string }[];
//   onDelete: (id: string) => void;
// }

const TodoList: React.FC = () => {
  const ctx = useContext(TodosContext);
  return (
    <ul>
      {ctx.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={ctx.removeTodo.bind(null, todo.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
