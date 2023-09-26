import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTodo, saveChanges } from "../store/todoSlice";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";

const EditTodo = () => {
  const { oneTodo } = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneTodo(id));
  }, []);

  useEffect(() => {
    if (oneTodo) {
      setTodo(oneTodo);
    }
  }, [oneTodo]);
  console.log(oneTodo);
  return (
    <>
      {oneTodo ? (
        <div>
          <h3>Edit Todo</h3>
          {/* <input */}

          <Input
            type="text"
            onChange={(e) => setTodo({ ...todo, body: e.target.value })}
            value={todo.body}
          />
          <Button
            onClick={() => {
              dispatch(saveChanges(todo));
              navigate("/");
            }}
          >
            save canges
          </Button>
        </div>
      ) : (
        <h5>loading...</h5>
      )}
    </>
  );
};

export default EditTodo;
