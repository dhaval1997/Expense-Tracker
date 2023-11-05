import React, { useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import ListItem from "./ListItem";
import AddExpense from "./AddExpense";

const ExpenseList = () => {
  const {
    expenseList,
    updateExpenseData,
    deleteExpenseData,
  } = useExpense();
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleEditClick = (expense) => {
    setSelectedExpense(expense);
  };

  const handleUpdateExpense = async () => {
    if (selectedExpense) {
      const updatedExpense = { ...selectedExpense, ...newData };
      await updateExpenseData(selectedExpense.id, updatedExpense);
      setSelectedExpense(null);
    }
  };

  const handleDeleteExpense = async () => {
    await deleteExpenseData(selectedExpense);
    setSelectedExpense(null);
  };

  return (
    <div>
      <ul>
        {expenseList.map((data, index) => (
          <ListItem expense={data} key={index} onEditClick={handleEditClick} />
        ))}
      </ul>
      {selectedExpense && (
        <AddExpense
          expenseItem={selectedExpense}
          alternatingAdding={() => setSelectedExpense(null)}
          updateExpense={handleUpdateExpense}
          deleteExpense={handleDeleteExpense}
        />
      )}
    </div>
  );
};

export default ExpenseList;
