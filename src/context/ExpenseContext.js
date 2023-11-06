import React, { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const { user } = useSelector((state) => state.auth); // Access user from the Redux store
  const [expenseList, setExpenseList] = useState([]);
  const [isAddExpenseModalOpen, setAddExpenseModalOpen] = useState(false);

  const openAddExpenseModal = () => {
    setAddExpenseModalOpen(true);
  };

  const closeAddExpenseModal = () => {
    setAddExpenseModalOpen(false);
  };

  const expensesCollection = user
    ? collection(db, "users", user.uid, "expenses")
    : null;

  const addExpenseToFirestore = async (expenseData) => {
    if (expensesCollection) {
      try {
        const newExpenseRef = await addDoc(expensesCollection, expenseData);
        const newExpenseId = newExpenseRef.id;
        const expenseWithId = { ...expenseData, id: newExpenseId };
        setExpenseList((prevExpenses) => [...prevExpenses, expenseWithId]);
        console.log("Expense added with ID: ", newExpenseId);
      } catch (error) {
        console.error("Error adding expense to Firestore: ", error);
      }
    }
  };

  const fetchExpenseData = async () => {
    if (expensesCollection) {
      try {
        const querySnapshot = await getDocs(expensesCollection);
        const expenses = [];
        querySnapshot.forEach((doc) => {
          expenses.push({ id: doc.id, ...doc.data() });
        });
        setExpenseList(expenses);
      } catch (error) {
        console.error("Error fetching expense data from Firestore: ", error);
      }
    }
  };

  const updateExpenseData = async (expenseId, newData) => {
    if (expensesCollection) {
      try {
        const expenseDocRef = doc(expensesCollection, expenseId);
        await updateDoc(expenseDocRef, newData);
        console.log(`Expense with ID ${expenseId} updated.`);
        setExpenseList((prevExpenses) =>
          prevExpenses.map((expense) =>
            expense.id === expenseId ? { ...expense, ...newData } : expense
          )
        );
      } catch (error) {
        console.error("Error updating expense in Firestore: ", error);
      }
    }
  };

  const deleteExpenseData = async (expenseId) => {
    if (expensesCollection) {
      try {
        const expenseDocRef = doc(expensesCollection, expenseId);
        await deleteDoc(expenseDocRef);
        console.log(`Expense with ID ${expenseId} deleted.`);
        setExpenseList((prevExpenses) =>
          prevExpenses.filter((expense) => expense.id !== expenseId)
        );
      } catch (error) {
        console.error("Error deleting expense from Firestore: ", error);
      }
    }
  };

  console.log(expenseList);
  useEffect(() => {
    fetchExpenseData();
  }, [user]);

  return (
    <ExpenseContext.Provider
      value={{
        expenseList,
        addExpenseToFirestore,
        updateExpenseData,
        deleteExpenseData,
        fetchExpenseData,
        isAddExpenseModalOpen,
        openAddExpenseModal,
        closeAddExpenseModal,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  return useContext(ExpenseContext);
};
