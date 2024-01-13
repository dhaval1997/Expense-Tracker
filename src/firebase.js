// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT0ohehfP72c4a83RdxUU0lIIwYsHmd38",
  authDomain: "expense-tracker-da9eb.firebaseapp.com",
  projectId: "expense-tracker-da9eb",
  storageBucket: "expense-tracker-da9eb.appspot.com",
  messagingSenderId: "110426446096",
  appId: "1:110426446096:web:78f23be464d075b392ad95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
