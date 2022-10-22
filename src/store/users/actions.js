import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { UserService } from "../../services/users";

export const CREATE_USER = 'CREATE_USER'
export const FETCH_USERS = 'FETCH_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const setLoading = createAction("SET_LOADING");

export const fetchUsers = createAsyncThunk(FETCH_USERS, (id) => {
  return UserService.get(id);
})

export const updateUser = createAsyncThunk(UPDATE_USER, ({id, user}) => {
  return UserService.update({id, user})
})

export const createUser = createAsyncThunk(CREATE_USER, ({user}) => {
  console.log('action create user is hit')
  console.log(user)
  return UserService.create({user})
})