import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modalSlice";

const AddButton = ({ className = "" }) => {
  const dispatch = useDispatch();
  const classStyle =
    "fixed bottom-8 right-8 px-6 py-4 ButtonPrimary-4 bg-gray-500 text-gray-50 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300" +
    className;

  const handleAddClick = () => {
    console.log('Attempting to open modal');
    dispatch(openModal(null));
  };

  return (
    <button onClick={handleAddClick} className={classStyle}>
      <span className="text-4xl font-bold">+</span>
    </button>
  );
};

export default AddButton;
