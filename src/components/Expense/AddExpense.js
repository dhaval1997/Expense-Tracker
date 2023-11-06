import React, { useRef, useState, useEffect } from "react";
import Modal from "../Container/Modal";
import ToggleButton from "../Container/ToggleButton";
import DropDown from "./DropDown";
import ButtonPrimary from "../Container/ButtonPrimary";
import { categoriesExpense, categoriesIncome } from "../../context/Categories";
import { useExpense } from "../../context/ExpenseContext";
import { useSelector } from "react-redux";

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
  updateExpense,
}) => {
  const { user } = useSelector((state) => state.auth); // Access user from the Redux store
  console.log(user);
  const { addExpenseToFirestore, updateExpenseData, deleteExpenseData } =
    useExpense();

  const amountRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const noteRef = useRef();

  const [isExpense, setExpense] = useState(expenseItem.type);
  const [defaultCategory, setCategory] = useState(expenseItem.category);

  function toggleExpense() {
    setExpense(!isExpense);
  }
  function changeDefault(data) {
    setCategory(data);
  }

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
      console.log(expenseItem);
      await addExpenseToFirestore(expense);
      alternatingAdding();
    }
  };

  updateExpense = async (expenseId, newData) => {
    await updateExpenseData(expenseId, newData);
  };

  const deleteExpense = async (expense) => {
    const { id } = expense;
    await deleteExpenseData(id);
    alternatingAdding();
  };
  const handleUpdateExpense = async () => {
    // Capture the updated data here
    const updatedData = {
      type: isExpense,
      amount: amountRef.current.value,
      category: defaultCategory,
      date: dateRef.current.value,
      time: timeRef.current.value,
      note: noteRef.current.value,
    };

    if (defaultCategory.id !== "categories") {
      // Call the updateExpense function
      updateExpense(expenseItem.id, updatedData);
      alternatingAdding();
    }
  };

  useEffect(() => {
    setCategory({ id: "categories", name: "Categories", HTMLname: "label" });
  }, [user, isExpense, addExpenseToFirestore]);

  return (
    <>
      <Modal onClick={alternatingAdding}>
        <div className="flex justify-end">
          <button
            onClick={alternatingAdding}
            className="px-1.5 rounded font-semibold bg-gray-200 text-red-500 hover:bg-red-400 hover:text-gray-200"
          >
            X
          </button>
        </div>
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
            <div className="flext w-full mb-3 gap-2">
              <ButtonPrimary type="submit" className="w-full">
                {isExpense ? "Add Expense" : "Add Income"}
              </ButtonPrimary>
            </div>
            {expenseItem.id && (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    deleteExpense(expenseItem);
                  }}
                  className="py-1.5 px-8 rounded font-semibold bg-red-200 text-red-500 hover:bg-red-400 hover:text-gray-200"
                >
                  Delete
                </button>
                <ButtonPrimary
                  type="submit"
                  className="w-full"
                  onClick={handleUpdateExpense}
                >
                  Update Expense
                </ButtonPrimary>
              </div>
            )}
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddExpense;
