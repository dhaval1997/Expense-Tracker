import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedPage from "./pages/ProtectedPage";
import Home from "./pages/Home";
import UpdateProfile from "./pages/UpdateProfile";
import Auth from "./pages/Auth";
import RedirectPage from "./pages/RedirectPage";
import Verify from "./pages/Verify";

const App = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedPage>
            <Home />
          </ProtectedPage>
        }
      />
      <Route path="/auth" element={<Auth />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/updateprofile" element={<UpdateProfile />} />
    </Routes>
  );
};

export default App;
