import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./todos/reducer";
import { UserReducer } from "./users/reducer";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
    users: UserReducer,
  },
});
