import { createContext, useState } from "react";
import { categoriesExpense, categoriesIncome } from "./Categories";

const Context = createContext({
  expenseCategories: [],
  incomeCategories: [],
});

export const ContextProvider = ({ children }) => {
  const [expenseCategories, setExpenseCategories] = useState(categoriesExpense);
  const [incomeCategories, setIncomeCategories] = useState(categoriesIncome);
  return (
    <Context.Provider
      value={{
        expenseCategories: expenseCategories,
        incomeCategories: incomeCategories,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
