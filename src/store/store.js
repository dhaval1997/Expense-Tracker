import { configureStore } from "@reduxjs/toolkit";
import addModalSlice from "./addModalSlice";
import authReducer from "./authSlice";
import expenseSlice from "./expenseSlice";

const store = configureStore({
  reducer: { auth: authReducer, expense: expenseSlice, addModal: addModalSlice },
});

export default store;
