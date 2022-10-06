import { createReducer } from "@reduxjs/toolkit";
import * as UserActions from "./actions";

const initialState = {
  userId: 0,
};

export const UserReducer = createReducer(initialState, (users) => {
  users.addDefaultCase((state) => state);
});
