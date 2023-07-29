// contacts-slice.js
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (store, { payload }) => {
      const isContactExist = store.find((contact) => contact.name.toLowerCase() === payload.name.toLowerCase());
      if (isContactExist) {
        alert(`User with name ${payload.name} is already in contacts`);
        return;
      }

      store.push({ ...payload, id: nanoid() });
    },
    deleteContact: (store, { payload }) => store.filter((item) => item.id !== payload),
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
