import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../services/contactsAPI';


export const getContactsThunk = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await contactsAPI.fetchContacts();
  return contacts;
});


export const addContactsThunk = createAsyncThunk('contacts/addContact', async (newContact) => {
  const contact = await contactsAPI.addContact(newContact);
  return contact;
});


export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    await contactsAPI.deleteContact(contactId);
    return contactId;
  }
);

