import React, { useState } from "react";
import Navbar from "../components/NavItems/NavBar";
import BodyNavbar from "../components/NavItems/BodyNavbar";
import AddExpense from "../components/Expense/AddExpense";
import AddButton from "../components/Container/AddButton";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [adding, setAdding] = useState(false);
  const alternatingAdding = () => {
    setAdding(!adding);
  };
  return (
    <div>
      {adding && <AddExpense alternatingAdding={alternatingAdding} />}
      <Navbar />
      <BodyNavbar />
      <Outlet/>
      <AddButton onClick={alternatingAdding} />
    </div>
  );
};

export default Root;
