import React, { useState } from "react";
import DropItem from "./DropItem";

const DropDown = ({ itemList, changeDefault, defaultCategory }) => {
  const [isOpen, setOpen] = useState(false);

  const dropDownHandler = () => {
    setOpen(!isOpen);
  };
  return (
    <button
      type="button"
      onClick={dropDownHandler}
      className="relative w-full h-9 px-1 border rounded border-gray-300"
    >
      <div className="flex items-center justify-start">
        <p className="font-medium ms-1">{defaultCategory.name}</p>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full rounded border">
          <ul className="divide-y-2 bg-gray-50 divide-gray-200 max-h-52 overflow-y-scroll">
            {itemList.map((item) => {
              return (
                <DropItem
                  key={item.id}
                  data={item}
                  changeDefault={changeDefault}
                />
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropDown;
