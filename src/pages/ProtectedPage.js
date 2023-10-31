import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  let { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedPage;
