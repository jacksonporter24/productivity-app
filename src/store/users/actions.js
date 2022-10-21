import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/users";

export const setLoading = createAction("SET_LOADING");

export const fetchUsers = createAsyncThunk("FETCH_USERS", (id) => {
  return UserService.get(id);
})

export const updateUser = createAsyncThunk("UPDATE_USER", ({id, user}) => {
  return UserService.update({id, user})
})

export const createUser = createAsyncThunk("CREATE_USER", ({id, name, age}) => {
  return UserService.create({id, name, age})
})