// src/utils/storage.ts

import { Todo } from "../types/todo";

export const loadTodosFromStorage = (): Todo[] => {
  try {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch {
    return [];
  }
};

export const saveTodosToStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
