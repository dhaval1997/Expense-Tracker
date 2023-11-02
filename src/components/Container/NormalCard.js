import React from "react";

const NormalCard = ({children}) => {
  return (
    <div className=" bg-white rounded shadow-inner p-4 border max-w-3xl mx-auto">
      {children}
    </div>
  );
};

export default NormalCard;
