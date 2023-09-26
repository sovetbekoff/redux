import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../index.module.css";
import { useDispatch } from "react-redux";
import { changeTodoStatus, deleteTodo } from "../store/todoSlice";
import { useNavigate } from "react-router-dom";

export default function TodoItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <li className={styles.list__item}>
          <input
            type="checkbox"
            onChange={() => dispatch(changeTodoStatus(todo.id))}
          />
          <p className={todo.status ? styles.completed : styles.undone}>
            {todo.body}
          </p>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          <button onClick={() => navigate(`/edit/${todo.id}`)}>Edit</button>
        </li>
      </CardActions>
    </Card>
  );
}
