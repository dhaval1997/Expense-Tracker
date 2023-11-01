import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedPage from "./pages/ProtectedPage";
import Root from "./pages/Root";
import Profile from "./pages/Profile";

const App = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedPage>
            <Root />
          </ProtectedPage>
        }
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
