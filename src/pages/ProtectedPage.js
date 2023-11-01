import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedPage = ({ children }) => {
  let { user } = useAuth();
  if (!user.accessToken) {
    return <Navigate to="/auth" />;
  }
   else if (!user.emailVerified) {
    return <Navigate to="/verify" />;
  }
  return <div>{children}</div>;
};

export default ProtectedPage;
