import React from "react";
import LoginForm from '../components/Auth/LoginForm'
import VerifyForm from "../components/Auth/VerifyForm";
import { useSelector } from "react-redux";

const ProtectedPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth); // Access user from the Redux store
  if (!user) {
    return <LoginForm/>
  }
   else if (!user.emailVerified) {
    return <VerifyForm/> 
  }
  return <div>{children}</div>;
};

export default ProtectedPage;
