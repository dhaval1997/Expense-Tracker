import React from "react";

const AddButton = ({onClick=()=>{}, className=""}) => {
  const classStyle =
    "bg-gray-700 text-gray-100 rounded px-6 py-1.5 drop-shadow-lg" + className;
  return (
    <button onClick={onClick} className={classStyle}>
      Add Expense
    </button>
  );
};

export default AddButton;
