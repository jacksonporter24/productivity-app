import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const get = () => getDocs(collection(db, "todos"));

export const TodoService = {
  get,
};
