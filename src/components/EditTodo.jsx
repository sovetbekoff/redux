import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getOnetodo } from "../store.todoSlice";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTodo, saveChanges } from "../store/todoSlice";

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
          <input
            type="text"
            onChange={(e) => setTodo({ ...todo, body: e.target.value })}
            value={todo.body}
          />
          <button
            onClick={() => {
              dispatch(saveChanges(todo));
              navigate("/");
            }}
          >
            save canges
          </button>
        </div>
      ) : (
        <h5>loading...</h5>
      )}
    </>
  );
};

export default EditTodo;
