// src/__tests__/TodoPage.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import TodoPage from "../pages/TodoPage.tsx";

test("Добавление новой задачи", () => {
  render(<TodoPage />);

  const input = screen.getByPlaceholderText(/добавить задачу/i);
  const button = screen.getByRole("button", { name: /добавить/i });

  fireEvent.change(input, { target: { value: "Сделать тест" } });
  fireEvent.click(button);

  expect(screen.getByText("Сделать тест")).toBeInTheDocument();
});

test("Фильтрация активных задач", () => {
  render(<TodoPage />);

  const input = screen.getByPlaceholderText(/добавить задачу/i);
  const addButton = screen.getByRole("button", { name: /добавить/i });

  fireEvent.change(input, { target: { value: "Задача 1" } });
  fireEvent.click(addButton);

  fireEvent.change(input, { target: { value: "Задача 2" } });
  fireEvent.click(addButton);

  const checkbox = screen.getByLabelText("Чекбокс для Задача 2");
  fireEvent.click(checkbox);

  const activeFilterButton = screen.getByRole("button", {
    name: /^активные$/i,
  });
  fireEvent.click(activeFilterButton);

  const visibleTasks = screen
    .getAllByRole("listitem")
    .map((el) => el.textContent);
  expect(visibleTasks).toContain("Задача 1");
  expect(visibleTasks).not.toContain("Задача 2");
});

test("Фильтрация завершённых задач", () => {
  render(<TodoPage />);

  const input = screen.getByPlaceholderText(/добавить задачу/i);
  const button = screen.getByRole("button", { name: /добавить/i });

  fireEvent.change(input, { target: { value: "Задача 1" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "Задача 2" } });
  fireEvent.click(button);

  const checkboxes = screen.getAllByRole("checkbox");
  fireEvent.click(checkboxes[0]);
  fireEvent.click(checkboxes[1]);

  const completedButtons = screen.getAllByRole("button", {
    name: /завершённые/i,
  });
  const filterCompletedButton = completedButtons.find(
    (btn) => btn.textContent === "Завершённые"
  );
  fireEvent.click(filterCompletedButton!);

  const visibleTasks = screen
    .getAllByRole("listitem")
    .map((el) => el.textContent);
  expect(visibleTasks).toContain("Задача 1");
  expect(visibleTasks).toContain("Задача 2");
});
