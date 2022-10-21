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

const create = async ({id, user}) => {
  const userRef = doc(db, "users", id);
  await addDoc(userRef, user);
  return getById(id);
};

export const UserService = {
  get,
  update,
  create,
};
