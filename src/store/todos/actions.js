import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TodoService } from "../../services/todos";

export const setLoading = createAction("SET_LOADING");

export const fetchTodos = createAsyncThunk("FETCH_TODOS", (id) => {
  return TodoService.get(id);
});
