import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const get = () => getDocs(collection(db, "users"));

const getById = (id) => getDoc(doc(db, "users", id));

const update = async ({ id, user }) => {
  const userRef = doc(db, "users", id);
  await updateDoc(userRef, user);
  return getById(id);
};

const create = async ({ user }) => {
  console.log("create async is hit");
  console.log(user)
  const userRef = await addDoc(collection(db, "users"), {
    name: user.name,
    age: user.age,
  });
  console.log("userRef is hit");
  // await addDoc(userRef, user, "530");
  console.log("addDoc is hit");
  return getById(userRef);
};

export const UserService = {
  get,
  update,
  create,
};
