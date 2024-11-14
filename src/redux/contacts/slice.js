import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';
import toast from 'react-hot-toast';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = state => {
  state.loading = false;

  toast.error('Oh no! Something went wrong');
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    currentContact: null,
    loading: false,
  },

  reducers: {
    setCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);

        toast.success(`${action.payload.name} added to contacts list`);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.meta.arg);

        toast.success(`${action.payload.name} deleted from contacts list`);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map(contact => {
          if (contact.id === action.payload.id) {
            return { ...contact, ...action.payload };
          }

          return contact;
        });
        state.currentContact = action.payload;

        toast.success(`${action.payload.name} updated`);
      })
      .addCase(updateContact.rejected, handleRejected);
  },
});

export const { setCurrentContact } = contactsSlice.actions;

export default contactsSlice.reducer;
