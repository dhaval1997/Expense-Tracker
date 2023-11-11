import expenseReducer, {
  expenseLoading,
  expenseReceived,
  expenseRequestFailed,
  expenseAdded,
  expenseUpdated,
  expenseDeleted,
  selectTotalExpenses,
  selectTotalIncome,
  selectTotalBalance,
} from "./expenseSlice";

describe("expenseSlice reducer", () => {
  it("should handle expenseLoading action", () => {
    const initialState = {
      expenseList: [],
      loading: false,
      error: null,
    };

    const newState = expenseReducer(initialState, expenseLoading());

    expect(newState.loading).toBe(true);
    expect(newState.expenseList).toEqual([]);
    expect(newState.error).toBeNull();
  });

  it("should handle expenseReceived action", () => {
    const initialState = {
      expenseList: [],
      loading: true,
      error: null,
    };

    const expensesPayload = [{ id: 1, amount: 100, type: true }];
    const newState = expenseReducer(
      initialState,
      expenseReceived(expensesPayload)
    );

    expect(newState.loading).toBe(false);
    expect(newState.expenseList).toEqual(expensesPayload);
    expect(newState.error).toBeNull();
  });

  it("should handle expenseRequestFailed action", () => {
    const initialState = {
      expenseList: [],
      loading: true,
      error: null,
    };

    const errorPayload = "Request failed";
    const newState = expenseReducer(
      initialState,
      expenseRequestFailed(errorPayload)
    );

    expect(newState.loading).toBe(false);
    expect(newState.expenseList).toEqual([]);
    expect(newState.error).toEqual(errorPayload);
  });

  it("should handle expenseAdded action", () => {
    const initialState = {
      expenseList: [],
      loading: false,
      error: null,
    };

    const expensePayload = { id: 1, amount: 50, type: true };
    const newState = expenseReducer(initialState, expenseAdded(expensePayload));

    expect(newState.expenseList).toEqual([expensePayload]);
  });

  it("should handle expenseUpdated action", () => {
    const initialState = {
      expenseList: [{ id: 1, amount: 50, type: true }],
      loading: false,
      error: null,
    };

    const updatedExpensePayload = { id: 1, amount: 75, type: true };
    const newState = expenseReducer(
      initialState,
      expenseUpdated(updatedExpensePayload)
    );

    expect(newState.expenseList).toEqual([updatedExpensePayload]);
  });

  it("should handle expenseDeleted action", () => {
    const initialState = {
      expenseList: [{ id: 1, amount: 50, type: true }],
      loading: false,
      error: null,
    };

    const deletedExpenseId = 1;
    const newState = expenseReducer(
      initialState,
      expenseDeleted(deletedExpenseId)
    );

    expect(newState.expenseList).toEqual([]);
  });
});

describe("Expense Selectors", () => {
  it("should select the total expenses", () => {
    const state = {
      expenses: {
        expenseList: [
          { id: 1, amount: 100, type: true },
          { id: 2, amount: 50, type: true },
        ],
      },
    };

    const result = selectTotalExpenses(state);

    expect(result).toEqual(150);
  });

  it("should select the total income", () => {
    const state = {
      expenses: {
        expenseList: [
          { id: 1, amount: 100, type: false },
          { id: 2, amount: 50, type: false },
        ],
      },
    };

    const result = selectTotalIncome(state);

    expect(result).toEqual(150);
  });

  it("should select the total balance", () => {
    const state = {
      expenses: {
        expenseList: [
          { id: 1, amount: 100, type: true },
          { id: 2, amount: 50, type: false },
        ],
      },
    };

    const result = selectTotalBalance(state);

    expect(result).toEqual(-50);
  });
});
