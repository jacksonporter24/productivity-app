import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd9uB8AcNWWFOZjDDQnGQVi_3ES7tOc2o",
  authDomain: "fir-proj-f9a32.firebaseapp.com",
  projectId: "fir-proj-f9a32",
  storageBucket: "fir-proj-f9a32.appspot.com",
  messagingSenderId: "1047761637745",
  appId: "1:1047761637745:web:15acf1713623be024d26d0",
  measurementId: "G-G361ZT8LBM",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

