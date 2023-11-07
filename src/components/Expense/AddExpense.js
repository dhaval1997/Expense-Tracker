import React, { useRef, useState, useEffect } from "react";
import Modal from "../Container/Modal";
import ToggleButton from "../Container/ToggleButton";
import DropDown from "./DropDown";
import ButtonPrimary from "../Container/ButtonPrimary";
import { categoriesExpense, categoriesIncome } from "../../store/mockData";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import {
  addNewExpense,
  deleteExistingExpense,
  updateExistingExpense,
} from "../../store/expenseActions";

const AddExpense = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user.uid);
  const { isAddExpenseModalOpen, editingExpense } = useSelector(
    (state) => state.modal
  );
  const isEditing = editingExpense !== null;

  const amountRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const noteRef = useRef();

  // If editingExpense is not null, we are in edit mode
  const [isExpense, setExpense] = useState(
    editingExpense ? editingExpense.type : true
  );
  const [defaultCategory, setCategory] = useState(
    editingExpense
      ? editingExpense.category
      : {
          id: "categories",
          name: "Categories",
          HTMLname: "label",
        }
  );

  useEffect(() => {
    if (isEditing) {
      setExpense(editingExpense.type);
      setCategory(editingExpense.category);
      amountRef.current.value = editingExpense.amount;
      dateRef.current.value = editingExpense.date;
      timeRef.current.value = editingExpense.time;
      noteRef.current.value = editingExpense.note;
    }
  }, [editingExpense]);

  function toggleExpense() {
    setExpense(!isExpense);
  }
  function changeDefault(data) {
    setCategory(data);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      type: isExpense,
      amount: amountRef.current.value,
      category: defaultCategory,
      date: dateRef.current.value,
      time: timeRef.current.value,
      note: noteRef.current.value,
    };
    if (isEditing) {
      dispatch(updateExistingExpense(userId, editingExpense.id, newData));
    } else {
      dispatch(addNewExpense(userId, newData));
    }
    dispatch(closeModal());
  };

  const handleDelete = async () => {
    if (isEditing) {
      dispatch(deleteExistingExpense(userId, editingExpense.id));
      dispatch(closeModal());
    }
  };

  return (
    <>
      {isAddExpenseModalOpen && (
        <Modal onClick={() => dispatch(closeModal())}>
          <div className="flex justify-end">
            <button
              onClick={() => dispatch(closeModal())}
              className="px-1.5 rounded font-semibold bg-red-400 text-gray-50 hover:bg-red-500 hover:text-gray-50"
            >
              X
            </button>
          </div>
          <h2
            className={`mb-2 text-center font-semibold text-2xl ${
              isExpense ? "text-red-500" : "text-green-600"
            }`}
          >
            {isEditing
              ? isExpense
                ? "Modify Expense"
                : "Modify Income"
              : isExpense
              ? "Add Expense"
              : "Add Income"}
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
            <form onSubmit={handleFormSubmit}>
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
              {!isEditing && (
                <div className="flext w-full mb-3 gap-2">
                  <ButtonPrimary type="submit" className="w-full">
                    {isExpense ? "Add Expense" : "Add Income"}
                  </ButtonPrimary>
                </div>
              )}
              {isEditing && (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleDelete}
                    className="py-1.5 px-8 rounded font-semibold bg-red-200 text-red-500 hover:bg-red-400 hover:text-gray-200"
                  >
                    Delete
                  </button>
                  <ButtonPrimary type="submit" className="w-full">
                    {isExpense ? "Update Expense" : "Update Income"}
                  </ButtonPrimary>
                </div>
              )}
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddExpense;
