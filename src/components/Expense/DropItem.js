import React from "react";

const DropItem = ({ data, changeDefault }) => {
  return (
    <li
      className="px-1 font-medium py-2 hover:bg-gray-300 flex items-center justify-start space-x-1"
      onClick={() => {
        changeDefault(data);
      }}
    >
      <p>{data.name}</p>
    </li>
  );
};

export default DropItem;
