import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.scss";
import "antd/dist/antd.css";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fetchTodos } from "../store/todos/actions";
import {
  fetchUsers,
  updateUser as updateUserAction,
  createUser as createUserAction,
} from "../store/users/actions";
import { selectUsers, selectUserName } from "../store/users/selectors";
import { Button, Input } from "antd";

function App() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  // const name = useSelector(state => state.users.name)
  const name = useSelector(selectUserName)

  const handleNameChange = (e) => {
    const tempName = e.target.value
    console.log(tempName)
    console.log('handleChagne hit')
    Object.assign(...state.name,tempName)
    // dispatch()
    // dispatch(createAsyncThunk(currentUser))
    // this.currentUserName = name
    console.log({name})
  }

  // const usersExample = useSelector((state) => state.users.users)
// const newFields = {age: age + 1}
// await updateDoc(userDoc, newFields);
  const usersCollectionRef = collection(db, "users");

  const createUser = async (name, age) => {
    // await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    console.log("create User is hit");
    dispatch(
      createUserAction({ name: name, age: Number(age) })
    );
  };

  const updateUser = (id, age) => {
    dispatch(updateUserAction({ id, user: { age: age + 1 } }));
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    dispatch(fetchTodos("123"));
  }, []);

  useEffect(() => {
    dispatch(fetchUsers("jackson"));
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.createUser}>
        <Input
          placeholder="Name..."
          value={name}
          onChange={handleNameChange}
        />
        <Input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            users.age(event.target.value)
          }}
        />
        <Button type="primary" onClick={() => {
          createUser(this.users.name, this.users.age)}}>
          Create User
        </Button>
      </div>
      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>NAME: {user.name}</h1>
            <h1>AGE: {user.age}</h1>
            <Button
              type="primary"
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              Increase Age
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
