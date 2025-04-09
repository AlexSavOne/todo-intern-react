// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
