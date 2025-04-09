// src/pages/TodoPage.tsx
import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

const TodoPage = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
    activeTodos,
    completedTodos,
  } = useTodos();

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };

  const getVisibleTodos = () => {
    if (filter === "active") return activeTodos;
    if (filter === "completed") return completedTodos;
    return todos;
  };

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Добавить задачу..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Добавить
        </button>
      </form>

      <div className="btn-group mb-3">
        <button
          className={`btn btn-outline-secondary ${
            filter === "all" ? "active" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button
          className={`btn btn-outline-secondary ${
            filter === "active" ? "active" : ""
          }`}
          onClick={() => setFilter("active")}
        >
          Активные
        </button>
        <button
          className={`btn btn-outline-secondary ${
            filter === "completed" ? "active" : ""
          }`}
          onClick={() => setFilter("completed")}
        >
          Завершённые
        </button>
      </div>

      <ul className="list-group">
        {getVisibleTodos().map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex align-items-center gap-2"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              className={
                todo.completed ? "text-decoration-line-through text-muted" : ""
              }
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="text-muted">{activeTodos.length} задач осталось</span>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={clearCompleted}
        >
          Очистить завершённые
        </button>
      </div>
    </div>
  );
};

export default TodoPage;
