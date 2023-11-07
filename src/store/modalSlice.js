import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddExpenseModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isAddExpenseModalOpen = true;
    },
    closeModal: (state) => {
      state.isAddExpenseModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
