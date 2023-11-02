import React, { useContext, useRef, useState, useEffect } from "react";
import Modal from "../Container/Modal";
import ToggleButton from "../Container/ToggleButton";
import DropDown from "./DropDown";
import ButtonPrimary from "../Container/ButtonPrimary";
import Context from "../../context/Context";

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
    data: "",
    time: "",
    note: "",
  },
}) => {
  const ctx = useContext(Context);

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
      e.terget.reset();
    }
  };

  useEffect(() => {
    setCategory({ id: "categories", name: "Categories", HTMLname: "label" });
  }, [isExpense]);

  return (
    <>
      <Modal>
        <h2
          className={`mb-2 text-2xl ${
            isExpense ? "text-red-500" : "text-green-600"
          }`}
        >
          {isExpense ? "Add Expense" : "Add Income"}
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <ToggleButton onClick={toggleExpense}>
            {isExpense ? "Expense" : "Income"}
          </ToggleButton>
        </div>
        <div className="my-3 text-gray-700">
          <form onSubmit={addingExpense}>
            <div className="mb-1 mt-2">
              {isExpense ? (
                <DropDown
                  itemList={ctx.expenseCategories}
                  changeDefault={changeDefault}
                  defaultCategory={defaultCategory}
                />
              ) : (
                <DropDown
                  itemList={ctx.incomeCategories}
                  changeDefault={changeDefault}
                  defaultCategory={defaultCategory}
                />
              )}
            </div>
            <div className="space-y-1 mb-1">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-lg">Amount</label>
                  <input
                    type="number"
                    style={{ outline: "none" }}
                    required
                    min={1}
                    ref={amountRef}
                    className="w-full border rounded border-gray-300 h-9 p-2 focus:ring-2 focus:ring-gray-400 focus:border-0"
                  />
                </div>
                <div className="space-y-1 mb-1">
                  <label className="text-lg">Date</label>
                  <input
                    type="date"
                    style={{ outline: "none" }}
                    required
                    ref={dateRef}
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
                style={{ outline: "none" }}
              />
            </div>
            <div>
              <ButtonPrimary type="submit" className="w-full">
                {isExpense ? "Add Expense" : "Add Income"}
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default AddExpense;
