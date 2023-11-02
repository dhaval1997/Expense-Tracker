import React, { useState } from "react";
import Navbar from "../components/NavItems/NavBar";
import BodyNavbar from "../components/NavItems/BodyNavbar";
import AddExpense from "../components/Expense/AddExpense";
import AddButton from "../components/Container/AddButton";

const Root = () => {
  const [addingExpense, setAdding] = useState(false);
  const alternatingAdding = () => {
    setAdding(!addingExpense);
  };
  return (
    <div>
      {addingExpense && <AddExpense alternatingAdding={alternatingAdding} />}
      <Navbar />
      <BodyNavbar />
      <AddButton onClick={alternatingAdding} className="fixed right-6 bottom-6" />
    </div>
  );
};

export default Root;
