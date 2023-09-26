import React from "react";
import { Route, Routes } from "react-router-dom";

import EditTodo from "./components/EditTodo";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </>
  );
};

export default App;
