import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ExpenseContextProvider } from "./context/ExpenseContext";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ExpenseContextProvider>
        <App />
      </ExpenseContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
