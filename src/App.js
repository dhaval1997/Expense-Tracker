import React from "react";
import LoginForm from "./components/Auth/LoginForm";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/auth" element={<LoginForm />} />
    </Routes>
  );
};

export default App;
