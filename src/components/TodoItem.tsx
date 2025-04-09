// src/components/TodoItem.tsx
import React from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        className={
          todo.completed ? "text-decoration-line-through text-muted" : ""
        }
      >
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
