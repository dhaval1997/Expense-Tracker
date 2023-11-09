import React from "react";
import { useSelector } from "react-redux";

const Card = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const classStyle = `flex justify-center items-center h-screen ${
    isDarkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  }`;
  
  return (
    <div className={classStyle}>
      <div
        className="bg-white rounded-lg shadow-lg p-6 mx-auto"
        style={{ width: "380px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
