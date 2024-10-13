import { createSelector, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThaunk,
  deleteContactThunk,
  fetchContacts,
} from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {
  //   fetchDataSucces(state, action) {
  //     state.items = action.payload;
  //   },
  //   addContact(state, action) {
  //     state.items.push(action.payload);
  //   },
  //   deleteContact(state, { payload }) {
  //     state.items = state.items.filter(contact => contact.id !== payload);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(addContactThaunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContactThunk.pending,
          addContactThaunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContactThunk.rejected,
          addContactThaunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact, fetchDataSucces } =
  contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectIsError = state => state.contacts.isError;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) => {
    console.log('Calculating visible tasks');
    return items.filter(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  }
);
