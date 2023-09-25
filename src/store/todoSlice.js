import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    changeTodoStatus: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.status = !todo.status;
    },
  },
});

export const { addTodo, changeTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
