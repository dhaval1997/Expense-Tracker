const ButtonPrimary = ({
  children,
  type = "",
  onclick = () => {},
  className,
}) => {
  const classStyle =
    "py-1.5 px-4 rounded font-semibold bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-200" +
    className;
  return (
    <button type={type} className={classStyle} onClick={onclick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
