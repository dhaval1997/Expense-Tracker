import React, { useContext, useRef, useState, useEffect } from "react";
import Modal from "../Container/Modal";
import ToggleButton from "../Container/ToggleButton";
import DropDown from "./DropDown";
import ButtonPrimary from "../Container/ButtonPrimary";
import { categoriesExpense, categoriesIncome } from "../../context/Categories";
import { useAuth } from "../../context/AuthContext";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";

const AddExpense = ({
  alternatingAdding,
  expenseItem = {
    type: true,
    amount: "",
    category: {
      id: "categories",
      name: "Categories",
      HTMLname: "label",
    },
    date: `${new Date().toISOString().slice(0, 10)}`,
    time: `${new Date().toTimeString().slice(0, 5)}`,
    note: "",
  },
}) => {
  const { user } = useAuth();

  const amountRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const noteRef = useRef();

  const [isExpense, setExpense] = useState(expenseItem.type);
  const [defaultCategory, setCategory] = useState(expenseItem.category);
  const [expenseList, setExpenseList] = useState([]);

  function toggleExpense() {
    setExpense(!isExpense);
  }
  function changeDefault(data) {
    setCategory(data);
  }
  const sortExpenseByTime = (list) => {
    return list.sort((a, b) => {
      return (
        new Date(`${b.date},${b.time}`).getTime() -
        new Date(`${a.date},${a.time}`).getTime()
      );
    });
  };

  const addExpenseToFirestore = async (expenseData) => {
    if (user) {
      try {
        // Create a reference
        const expensesCollection = collection(
          db,
          "users",
          user.uid,
          "expenses"
        );
        // Add the expense data to Firestore
        const newExpense = await addDoc(expensesCollection, expenseData);
        console.log("Expense added with ID: ", newExpense.id);
      } catch (error) {
        console.error("Error adding expense to Firestore: ", error);
      }
    }
  };
  const addingExpense = async (e) => {
    e.preventDefault();
    const type = isExpense;
    const amount = amountRef.current.value;
    const date = dateRef.current.value;
    const time = timeRef.current.value;
    const note = noteRef.current.value;
    const category = defaultCategory;
    if (category.id !== "categories") {
      const expense = {
        type: type,
        amount: amount,
        category: category,
        date: date,
        time: time,
        note: note,
      };
      console.log(expense);
      addExpenseToFirestore(expense);
    }
  };

  const fetchExpenseData = async () => {
    if (user) {
      try {
        const userUid = user.uid;
        const expensesCollection = collection(db, "users", userUid, "expenses");

        const querySnapshot = await getDocs(expensesCollection);

        const expenses = [];
        querySnapshot.forEach((doc) => {
          expenses.push(doc.data());
        });

        setExpenseList(expenses);
      } catch (error) {
        console.error("Error fetching expense data from Firestore: ", error);
      }
    }
  };
  console.log(expenseList);

  useEffect(() => {
    setCategory({ id: "categories", name: "Categories", HTMLname: "label" });
    fetchExpenseData(); // Fetch expense data when the component mounts
  }, [user, isExpense]);

  return (
    <>
      <Modal onClick={alternatingAdding}>
        <h2
          className={`mb-2 text-center font-semibold text-2xl ${
            isExpense ? "text-red-500" : "text-green-600"
          }`}
        >
          {isExpense ? "Add Expense" : "Add Income"}
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <ToggleButton isActive={isExpense} onClick={toggleExpense}>
            Expense
          </ToggleButton>
          <ToggleButton isActive={!isExpense} onClick={toggleExpense}>
            Income
          </ToggleButton>
        </div>
        <div className="my-3 text-gray-700">
          <form onSubmit={addingExpense}>
            <div className="mb-1 mt-2">
              {isExpense ? (
                <DropDown
                  itemList={categoriesExpense}
                  changeDefault={changeDefault}
                  defaultCategory={defaultCategory}
                />
              ) : (
                <DropDown
                  itemList={categoriesIncome}
                  changeDefault={changeDefault}
                  defaultCategory={defaultCategory}
                />
              )}
            </div>
            <div className="space-y-1 mb-1">
              <div>
                <label className="text-lg">Amount</label>
                <input
                  type="number"
                  style={{ outline: "none" }}
                  required
                  min={1}
                  ref={amountRef}
                  defaultValue={expenseItem.amount}
                  className="w-full border rounded border-gray-300 h-9 p-2 focus:ring-2 focus:ring-gray-400 focus:border-0"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1 mb-1">
                  <label className="text-lg">Date</label>
                  <input
                    type="date"
                    style={{ outline: "none" }}
                    required
                    ref={dateRef}
                    defaultValue={expenseItem.date}
                    className="w-full border rounded border-gray-300 h-9 p-2 focus:ring-2 focus:ring-gray-400 focus:border-0"
                  />
                </div>
                <div className="space-y-1 mb-1">
                  <label className="text-lg">Time</label>
                  <input
                    type="time"
                    style={{ outline: "none" }}
                    required
                    ref={timeRef}
                    defaultValue={expenseItem.time}
                    className="w-full border rounded border-gray-300 h-9 p-2 focus:ring-2 focus:ring-gray-400 focus:border-0"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-1 mb-1">
              <label className="text-lg">
                Add comments<span className="text-gray-300">(optional)</span>
              </label>
              <textarea
                rows="2"
                className="w-full border rounded border-gray-300 p-2 focus:ring-2 focus:ring-gray-400 focus:border-0"
                ref={noteRef}
                defaultValue={expenseItem.note}
                style={{ outline: "none" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <ButtonPrimary type="submit" className="w-full">
                {isExpense ? "Add Expense" : "Add Income"}
              </ButtonPrimary>
              <button
                onClick={alternatingAdding}
                className="py-1.5 px-8 rounded font-semibold bg-gray-200 text-red-500 hover:bg-red-400 hover:text-gray-200"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddExpense;
