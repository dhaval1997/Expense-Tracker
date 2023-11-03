import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedPage from "./pages/ProtectedPage";
import Root from "./pages/Root";
import Profile from "./pages/Profile";
import Analysis from "./pages/Analysis";
import Account from "./pages/Account";
import Transactions from './pages/Transactions'

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
      >
        <Route path="analysis" element={<Analysis />} />
        <Route path="account" element={<Account />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
