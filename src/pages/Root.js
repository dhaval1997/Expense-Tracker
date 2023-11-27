import Navbar from "../components/NavItems/NavBar";
import BodyNavbar from "../components/NavItems/BodyNavbar";
import AddButton from "../components/Container/AddButton";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../store/modalSlice";
import AddExpense from "../components/Expense/AddExpense";

const Root = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isAddExpenseModalOpen);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      {isModalOpen && <AddExpense />}
      <Navbar />
      {/* <BodyNavbar /> */}
      <Outlet />
      <AddButton onClick={() => dispatch(openModal(null))} />
    </div>
  );
};

export default Root;
