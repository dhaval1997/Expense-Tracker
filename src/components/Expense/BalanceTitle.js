import React from "react";

const BalanceTitle = () => {
  return (
    <>
      <div className=" mb-3 border-b-2 pb-2">
        <div className="flex justify-around items-center text-gray-600">
          <div className="flex flex-col items-center">
            <p className="font-medium">Expense</p>
            <p className="text-red-500">5000</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Income</p>
            <p className="text-green-500">50000</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Balance</p>
            <p>45000</p>
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
