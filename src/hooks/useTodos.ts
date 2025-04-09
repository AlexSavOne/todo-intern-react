// src/hooks/useTodos.ts
import { useState } from "react";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return { todos, addTodo };
};
