// src/components/TodoItem.tsx
import React from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onRemove }) => {
  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Чекбокс для ${todo.text}`}
      />
      <span className={todo.completed ? "text-decoration-line-through" : ""}>
        {todo.text}
      </span>
      <button
        onClick={() => onRemove(todo.id)}
        className="btn btn-sm btn-outline-danger ms-auto"
        aria-label={`Удалить ${todo.text}`}
      >
        🗑
      </button>
    </li>
  );
};

export default TodoItem;
