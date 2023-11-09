import React from "react";
import { useSelector } from "react-redux";

const Modal = ({ children, onClick = () => {} }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const modalClassStyle = `z-[101] fixed start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 ${
    isDarkMode
      ? "bg-gray-700 text-gray-100"
      : "bg-white text-black"
  }`;
  return (
    <>
      <div
        className="bg-gray-800 opacity-40 fixed w-full h-full z-[100]"
        onClick={onClick}
      ></div>
      <div className={modalClassStyle}>
        <div className="bg-white drop-shadow-lg rounded p-4 w-80 sm:w-96">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
