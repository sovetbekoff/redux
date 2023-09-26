import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { useNavigate } from "react-router-dom";

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
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setTodoContext(e.target.value)}
        value={todoContent}
      />
      <button onClick={createTodo}>create</button>
    </div>
  );
};

export default AddTodo;
