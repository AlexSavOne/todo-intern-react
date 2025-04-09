// src/components/TodoItem.tsx
import React from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
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
    </li>
  );
};

export default TodoItem;
