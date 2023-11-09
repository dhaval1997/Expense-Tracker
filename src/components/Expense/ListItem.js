import React from "react";
import { useSelector } from "react-redux";

const ListItem = ({ expense, onEditClick }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <li
        className={`p-1 text-gray-600 hover:bg-gray-100 rounded cursor-pointer ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
        onClick={() => {
          onEditClick(expense);
        }}
      >
        <div className="grid grid-cols-3 gap-3 items-center m-1 text-gray-500">
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
                  ? `font-medium ${
                      isDarkMode ? "text-red-500" : "text-red-700"
                    }`
                  : `font-medium ${
                      isDarkMode ? "text-green-500" : "text-green-700"
                    }`
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
