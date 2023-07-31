import { createSlice } from '@reduxjs/toolkit';
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from './contacts-thunk';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactsThunk.pending, handlePending)
      .addCase(deleteContactsThunk.rejected, handleRejected)
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload);
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
