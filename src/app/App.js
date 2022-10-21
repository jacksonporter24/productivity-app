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
import { selectUsers } from "../store/users/selectors";
import { Button, Input } from "antd";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  // const usersExample = useSelector((state) => state.users.users)

  const usersCollectionRef = collection(db, "users");

  const createUser = async (name, age) => {
    // await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    // console.log("create User is hit");
    dispatch(
      createUserAction({ user: { name: name, age: Number(age) } })
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
          onChange={(event) => {
            users.name(event.target.value);
          }}
        />
        <Input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            users.age(event.target.value);
          }}
        />
        <Button type="primary" onClick={createUser}>
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
