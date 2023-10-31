import React from "react";
import LoginForm from "./components/Auth/LoginForm";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedPage from "./pages/ProtectedPage";
import Home from "./pages/Home";

const App = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedPage>
            <Home />
          </ProtectedPage>
        }
      />
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};

export default App;
