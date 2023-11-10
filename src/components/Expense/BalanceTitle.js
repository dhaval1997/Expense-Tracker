import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalExpenses,
  selectTotalIncome,
  selectTotalBalance,
} from "../../store/expenseSlice";

const BalanceTitle = () => {
  const totalExpenses = useSelector(selectTotalExpenses);
  const totalIncome = useSelector(selectTotalIncome);
  const totalBalance = useSelector(selectTotalBalance);

  const balanceTextColor = totalBalance < 0 ? "text-red-500" : "text-green-600";
  const balanceBgColor = totalBalance < 0 ? "bg-red-100" : "bg-green-100";

  return (
    <>
      <div className=" mb-3 border-b-2 pb-2">
        <div className="flex justify-around items-center text-gray-600">
          <div className="flex flex-col items-center">
            <p className="font-medium">Expense</p>
            <p className="text-red-500 font-medium">
              ₹{totalExpenses.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Income</p>
            <p className="text-green-600 font-medium">
              ₹{totalIncome.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Balance</p>
            <p className={`font-medium ${balanceTextColor}`}>
              ₹{totalBalance.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="my-2 border-b-2 rounded bg-gray-500 gap-3 px-3 py-1 grid grid-cols-3 items-center text-gray-50">
        <div className="flex justify-start">
          <p className="font-medium">Date</p>
        </div>
        <div className="flex justify-start">
          <p className="font-medium">Category</p>
        </div>
        <div className="flex justify-end">
          <p className="font-medium">Amount</p>
        </div>
      </div>
    </>
  );
};

export default BalanceTitle;
