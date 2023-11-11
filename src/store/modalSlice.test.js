import modalReducer, { openModal, closeModal } from "./modalSlice";

describe("modalSlice reducer", () => {
  it("should handle openModal action", () => {
    const initialState = {
      isAddExpenseModalOpen: false,
      editingExpense: null,
    };

    const newEditingExpense = { id: 1, amount: 50, type: true };
    const newState = modalReducer(initialState, openModal(newEditingExpense));

    expect(newState.isAddExpenseModalOpen).toBe(true);
    expect(newState.editingExpense).toEqual(newEditingExpense);
  });

  it("should handle closeModal action", () => {
    const initialState = {
      isAddExpenseModalOpen: true,
      editingExpense: { id: 1, amount: 50, type: true },
    };

    const newState = modalReducer(initialState, closeModal());

    expect(newState.isAddExpenseModalOpen).toBe(false);
    expect(newState.editingExpense).toBeNull();
  });
});
