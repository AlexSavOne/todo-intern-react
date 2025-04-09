// src/pages/TodoPage.tsx
import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const TodoPage = () => {
  const { todos, addTodo } = useTodos();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
