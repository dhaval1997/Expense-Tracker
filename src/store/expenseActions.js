import {
  expenseLoading,
  expenseReceived,
  expenseRequestFailed,
  expenseAdded,
  expenseUpdated,
  expenseDeleted,
} from "./expenseSlice";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export const fetchExpenses = (userId) => async (dispatch) => {
  dispatch(expenseLoading());
  try {
    const expensesCollection = collection(db, "users", userId, "expenses");
    const querySnapshot = await getDocs(expensesCollection);
    const expenses = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(expenseReceived(expenses));
  } catch (error) {
    dispatch(expenseRequestFailed(error.toString()));
  }
};

export const addNewExpense = (userId, expenseData) => async (dispatch) => {
  try {
    const expensesCollection = collection(db, "users", userId, "expenses");
    const docRef = await addDoc(expensesCollection, expenseData);
    dispatch(expenseAdded({ id: docRef.id, ...expenseData }));
  } catch (error) {
    dispatch(expenseRequestFailed(error.toString()));
  }
};

export const updateExistingExpense =
  (userId, expenseId, newData) => async (dispatch) => {
    try {
      const expenseDocRef = doc(db, "users", userId, "expenses", expenseId);
      await updateDoc(expenseDocRef, newData);
      dispatch(expenseUpdated({ id: expenseId, ...newData }));
    } catch (error) {
      dispatch(expenseRequestFailed(error.toString()));
    }
  };

export const deleteExistingExpense =
  (userId, expenseId) => async (dispatch) => {
    try {
      const expenseDocRef = doc(db, "users", userId, "expenses", expenseId);
      await deleteDoc(expenseDocRef);
      dispatch(expenseDeleted(expenseId));
    } catch (error) {
      dispatch(expenseRequestFailed(error.toString()));
    }
  };
