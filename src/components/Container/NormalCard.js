import React from "react";

const NormalCard = ({children}) => {
  return (
    <div className=" bg-white rounded-lg p-4 shadow border-current max-w-3xl mx-auto">
      {children}
    </div>
  );
};

export default NormalCard;
