import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modalSlice";
import { expenseLoading } from "../../store/expenseSlice";
import { fetchExpenses } from "../../store/expenseActions";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const { expenseList } = useSelector(
    (state) => state.expenses
  );
  const userId = useSelector((state) => state.auth.user.uid);

  const handleEditClick = (expense) => {
    console.log("Attempting to open modal with expense", expense);
    dispatch(openModal(expense));
  };

  useEffect(() => {
    dispatch(expenseLoading());
    dispatch(fetchExpenses(userId));
  }, [userId, dispatch]);

  return (
    <div>
      <ul>
        {expenseList.map((data, index) => (
          <ListItem expense={data} key={index} onEditClick={handleEditClick} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
