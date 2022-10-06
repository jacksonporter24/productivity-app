import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TodoService } from "../../services/todos";

export const setLoading = createAction("SET_LOADING");
