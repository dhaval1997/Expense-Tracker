const ButtonPrimary = ({
  type = "button",
  className = "",
  onClick = () => {},
  children,
}) => {
  const classStyle = " py-1.5 px-4 rounded font-semibold bg-gray-200 text-gray-600 hover:bg-gray-500 hover:text-gray-100 " + className;
  return (
    <button type={type} className={classStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
