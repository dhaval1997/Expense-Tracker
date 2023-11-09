import React from "react";
import { useSelector } from "react-redux";

const NormalCard = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const classStyle = `bg-white rounded-lg p-4 shadow ${
    isDarkMode ? "border-gray-800" : "border-gray-300"
  } max-w-3xl mx-auto`;

  return <div className={classStyle}>{children}</div>;
};

export default NormalCard;
