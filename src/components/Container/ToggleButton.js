import React from "react";

const ToggleButton = ({
  children,
  type = "button",
  onClick = () => {},
  className,
  isActive,
}) => {
  const classStyle = "py-1.5 px-4 rounded font-semibold" + className;
  
    return (
    <button
      type={type}
      className={
        isActive
        ? classStyle + " bg-gray-500 text-gray-100"
        : classStyle + "  text-gray-600 hover:bg-gray-100"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
