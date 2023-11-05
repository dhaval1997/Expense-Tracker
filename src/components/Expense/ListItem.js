import React from "react";

const ListItem = ({ expense, onEditClick }) => {
  const handleEditClick = () => {
    onEditClick(expense);
  };

  return (
    <>
      <li
        className="p-1 text-gray-600 hover:bg-gray-100 rounded cursor-pointer"
        onClick={handleEditClick}
      >
        <div className="grid grid-cols-3 gap-3 items-center items-center m-1 text-gray-500">
        <div className="flex justify-start">
            <p className="font-medium"> {expense.date}</p>
          </div>
          <div className="flex justify-start">
            <p className="font-medium">{expense.category.name}</p>
          </div>
          <div className="flex justify-end">
            <p
              className={
                expense.type
                  ? "font-medium text-red-500"
                  : "font-medium text-green-600"
              }
            >
              ₹{expense.amount}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ListItem;
