import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ExpenseContextProvider } from "./context/ExpenseContext";
import { Provider } from "react-redux";
import store from './store/store'

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ExpenseContextProvider>
        <App />
      </ExpenseContextProvider>
    </Provider>
  </BrowserRouter>
);
