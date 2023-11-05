import React from "react";
import Container from "../components/Container/Container";
import NormalCard from "../components/Container/NormalCard";
import BalanceTitle from "../components/Expense/BalanceTitle";
import ExpenseList from "../components/Expense/ExpenseList";

const Transactions = () => {
  return (
    <Container>
      <NormalCard>
        <BalanceTitle />
        <ExpenseList />
      </NormalCard>
    </Container>
  );
};

export default Transactions;
