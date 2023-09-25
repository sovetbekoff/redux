// import React from "react";

// const TodoItem = ({ todo }) => {

//   return (
//     <div>

//     </div>
//   );
// };

// export default TodoItem;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../index.module.css";
import { useDispatch } from "react-redux";
import { changeTodoStatus } from "../store/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
        className={styles.list_item}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
        <Typography variant="body2" color="text.secondary">
          <li className={styles.list_item}>
            <input
              type="checkbox"
              onChange={() => dispatch(changeTodoStatus(todo.id))}
            />
            <p className={todo.status ? styles.completed : styles.undone}>
              {todo.body}
            </p>
          </li>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
