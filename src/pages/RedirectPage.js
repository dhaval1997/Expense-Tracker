import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RedirectPage = ({ children }) => {
  const { user } = useAuth();
  if(user.accessToken){
    return <Navigate to={'/'} /> 
  }
  return <div>{children}</div>;
};

export default RedirectPage;
