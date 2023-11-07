import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isAddExpenseModalOpen: false,
    editingExpense: null, // Hold the expense being edited
  },
  reducers: {
    openModal: (state, action) => {
      state.isAddExpenseModalOpen = true;
      state.editingExpense = action.payload; // null for new expense, or expense object for editing
    },
    closeModal: (state) => {
      state.isAddExpenseModalOpen = false;
      state.editingExpense = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
