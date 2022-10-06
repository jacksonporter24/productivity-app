import { createReducer } from "@reduxjs/toolkit";
import * as TodoActions from "./actions";

const initialState = {
  todos: [],
  loading: false,
};

export const TodoReducer = createReducer(initialState, (todos) => {
  todos
    .addCase(TodoActions.fetchTodos.pending, (state) => ({
      ...state,
      todos: [],
      loading: true,
    }))
    .addCase(TodoActions.fetchTodos.rejected, (state) => ({
      ...state,
      loading: false,
      todos: [],
    }))
    .addCase(TodoActions.fetchTodos.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      todos: payload.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    }));

  todos.addDefaultCase((state) => state);
});
