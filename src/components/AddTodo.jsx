import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";

const AddTodo = () => {
  const [todoContent, setTodoContext] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function createTodo() {
    if (!todoContent.trim()) return alert("inp ok");

    let newTodo = {
      id: Date.now(),
      body: todoContent,
      statu: false,
    };

    dispatch(addTodo(newTodo));
    setTodoContext("");
    navigate("/");
  }

  return (
    <div>
      <h3>create todo</h3>
      <Input
        type="text"
        name=""
        id=""
        onChange={(e) => setTodoContext(e.target.value)}
        value={todoContent}
      />
      <Button onClick={createTodo}>create</Button>
    </div>
  );
};

export default AddTodo;
