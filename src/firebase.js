// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "react-authentication-858c9.firebaseapp.com",
  projectId: "react-authentication-858c9",
  storageBucket: "react-authentication-858c9.appspot.com",
  messagingSenderId: "373354733458",
  appId: "1:373354733458:web:a07572e10a74b1da75eb4b",
  measurementId: "G-576JDW0RPR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
