import { useSelector } from "react-redux";

const ButtonPrimary = ({
  type = "button",
  className = "",
  onClick = () => {},
  children,
}) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const classStyle = `py-1.5 px-4 rounded font-semibold ${
    isDarkMode
      ? "bg-gray-700 text-gray-100"
      : "bg-gray-200 text-gray-600"
  } hover:bg-gray-500 hover:text-gray-100 ${className}`;

  return (
    <button type={type} className={classStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
