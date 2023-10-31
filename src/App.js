import React from "react";
import LoginForm from "./components/Auth/LoginForm";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default App;
