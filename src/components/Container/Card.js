import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">
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
