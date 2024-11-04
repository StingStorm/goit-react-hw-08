import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectContatsState = state => state.contacts;

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