import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../index.module.css";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodo } from "../store/todoSlice";
import { useNavigate } from "react-router-dom";
export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActions>
        <li className={styles.list__item}>
          <input
            type="checkbox"
            onChange={() => dispatch(changeTodoStatus(todo.id))}
          />

          <Typography variant="body2" color="text.secondary">
            <p className={todo.status ? styles.completed : styles.undone}>
              {todo.body}
            </p>
          </Typography>

          <Button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</Button>
          <Button onClick={() => navigate(`/edit/${todo.id}`)}>Edit</Button>
        </li>
      </CardActions>
    </Card>
  );
}
