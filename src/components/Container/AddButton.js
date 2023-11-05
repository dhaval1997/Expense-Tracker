import React from "react";

const AddButton = ({ onClick = () => {}, className = "" }) => {
  const classStyle =
    "fixed bottom-8 right-8 px-6 py-4 ButtonPrimary-4 bg-gray-500 text-gray-50 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300" +
    className;
  return (
    <button onClick={onClick} className={classStyle}>
      <span className="text-4xl font-bold">+</span>
    </button>
  );
};

export default AddButton;
