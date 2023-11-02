import React from "react";

const ToggleButton = ({
  children,
  type = "",
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
          ? classStyle + "bg-gray-600 text-gray-100"
          : classStyle + "text-gray-600 bg-gray-100"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
