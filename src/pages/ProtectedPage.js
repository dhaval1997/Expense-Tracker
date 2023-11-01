import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import LoginForm from '../components/Auth/LoginForm'
import VerifyForm from "../components/Auth/VerifyForm";

const ProtectedPage = ({ children }) => {
  let { user } = useAuth();
  if (!user) {
    return <LoginForm/>
  }
   else if (!user.emailVerified) {
    return <VerifyForm/> 
  }
  return <div>{children}</div>;
};

export default ProtectedPage;
