import React, { useRef, useContext } from "react";
import "./NewTodo.css";
import { TodosContext } from "../store/context";

// only without Context to define prop types
// type NewTodoProps = {
//   onAddTodo: (todoText: string) => void;
// };

const NewTodo: React.FC = () => {
  const ctx = useContext(TodosContext);
  const inpRef = useRef<HTMLInputElement>(null);
  function todoSubmitHdnler(event: React.FormEvent) {
    event.preventDefault();
    const enterdtxt = inpRef.current!.value;
    ctx.addTodo(enterdtxt);
  }

  return (
    <form onSubmit={todoSubmitHdnler}>
      <div className="form-control">
        <label htmlFor="todo-txt">Todo Text</label>
        <input type="text" id="todo-txt" placeholder="todo text" ref={inpRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};
export default NewTodo;
