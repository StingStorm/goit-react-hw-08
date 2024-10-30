import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.meta.arg);
      })
      .addCase(deleteContact.rejected, handlePending);
  },
});

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

export default contactsSlice.reducer;
