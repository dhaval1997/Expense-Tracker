import { createSlice, createSelector } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenseList: [],
    loading: false,
    error: null,
  },
  reducers: {
    expenseLoading: (state) => {
      state.loading = true;
    },
    expenseReceived: (state, action) => {
      state.expenseList = action.payload;
      state.loading = false;
    },
    expenseRequestFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    expenseAdded: (state, action) => {
      state.expenseList.push(action.payload);
    },
    expenseUpdated: (state, action) => {
      const index = state.expenseList.findIndex(
        (expense) => expense.id === action.payload.id
      );
      if (index !== -1) {
        state.expenseList[index] = action.payload;
      }
    },
    expenseDeleted: (state, action) => {
      state.expenseList = state.expenseList.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

const selectExpenses = state => state.expenses.expenseList;

export const selectTotalExpenses = createSelector([selectExpenses], (expenses) =>
  expenses
    .filter(expense => expense.type === true)
    .reduce((total, expense) => total + Number(expense.amount), 0)
);

export const selectTotalIncome = createSelector([selectExpenses], (expenses) =>
  expenses
    .filter(expense => expense.type === false)
    .reduce((total, expense) => total + Number(expense.amount), 0)
);

export const selectTotalBalance = createSelector(
  [selectTotalExpenses, selectTotalIncome],
  (totalExpenses, totalIncome) => totalIncome - totalExpenses
);

export default expenseSlice.reducer;
export const {
  expenseLoading,
  expenseReceived,
  expenseRequestFailed,
  expenseAdded,
  expenseUpdated,
  expenseDeleted,
} = expenseSlice.actions;
