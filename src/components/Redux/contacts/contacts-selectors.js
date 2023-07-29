// contacts-selectors.js
import { createSelector } from '@reduxjs/toolkit';

export const getContacts = (store) => store.contacts;

export const getFilteredContacts = createSelector(
  [getContacts, (store) => store.filter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  }
);
