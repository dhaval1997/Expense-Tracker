// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt3E6mew6M7LilRJtwXcPep1N0yxPJzzY",
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
export default app;
