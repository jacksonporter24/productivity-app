import { createReducer } from "@reduxjs/toolkit";
import * as UserActions from "./actions";

const initialState = {
  userId: 0,
  name: "",
  age: 0,
  loading: false,
  users: [],
};

export const UserReducer = createReducer(initialState, (users) => {
  users
    .addCase(UserActions.fetchUsers.pending, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(UserActions.fetchUsers.rejected, (state) => ({
      ...state,
      loading: false,
      userId: 0,
      name: "",
      age: 0,
    }))
    .addCase(UserActions.fetchUsers.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      users: payload.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    }))
    .addCase(UserActions.updateUser.pending, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(UserActions.updateUser.rejected, (state) => ({
      ...state,
      loading: false,
    }))
    .addCase(UserActions.updateUser.fulfilled, (state, { payload }) => {
      const updated = { ...payload.data(), id: payload.id };
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === updated.id ? updated : user
        ),
      };
    })
    .addCase(UserActions.createUser.pending, (state) => ({
      ...state,
      loading: true,
    }))
    .addCase(UserActions.createUser.rejected, (state) => ({
      ...state,
      loading: false,
    }))
    .addCase(UserActions.createUser.fulfilled, (state, { payload }) => {
      const created = { ...payload.data(), id: payload.id };
      return {
        ...state,
        users: state.users.map
      };
    });

  users.addDefaultCase((state) => state);
});
