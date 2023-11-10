import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modalSlice";
import { expenseLoading } from "../../store/expenseSlice";
import { fetchExpenses } from "../../store/expenseActions";
import ButtonPrimary from "../Container/ButtonPrimary";

// Function to convert the expense data to CSV format
const convertToCSV = (data) => {
  const header = ["Date", "Category", "Amount"];
  const csv = [header.join(",")];

  data.forEach((expense) => {
    const row = [expense.date, expense.category.name, expense.amount];
    csv.push(row.join(","));
  });
  return csv.join("\n");
};

const ExpenseList = () => {
  const dispatch = useDispatch();
  const { expenseList } = useSelector((state) => state.expenses);
  const userId = useSelector((state) => state.auth.user.uid);

  const handleEditClick = (expense) => {
    console.log("Attempting to open modal with expense", expense);
    dispatch(openModal(expense));
  };

  const handleDownloadCSV = () => {
    // Convert the expense data to CSV format
    const csvData = convertToCSV(expenseList);

    // Create a Blob containing the CSV data
    const blob = new Blob([csvData], { type: "text/csv" });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "expenses.csv";

    // Trigger the download
    a.click();

    // Release the URL and remove the temporary <a> element
    window.URL.revokeObjectURL(url);
    a.remove();
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
      <ButtonPrimary onClick={handleDownloadCSV}>Download CSV</ButtonPrimary>
    </div>
  );
};

export default ExpenseList;
