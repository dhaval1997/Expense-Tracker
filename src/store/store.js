import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import authReducer from "./authSlice";
import expenseReducer from "./expenseSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    expenses: expenseReducer,
    modal: modalReducer,
  },
});

export default store;
