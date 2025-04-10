// src/hooks/useTodos.ts

import { useState, useEffect } from "react";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";
import { loadTodosFromStorage, saveTodosToStorage } from "../utils/storage";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromStorage());

  useEffect(() => {
    saveTodosToStorage(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
    removeTodo,
    activeTodos,
    completedTodos,
  };
};
