import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectContactsState = state => state.contacts;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      const isNameMatch = contact.name
        .toLocaleLowerCase()
        .includes(filter.toLowerCase().trim());
      const isNumberMatch = contact.number.includes(filter.trim());

      return isNameMatch || isNumberMatch;
    });
  }
);

export const selectContactById = createSelector(
  [selectContacts, (state, id) => id],
  (contacts, id) => {
    return contacts.find(contact => contact.id === id);
  }
);
