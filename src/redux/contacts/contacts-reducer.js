import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contacts-operations';
import { changeFilter } from './contacts-actions';

const items = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContact.rejected]: (_, action) => action.payload,
  [fetchContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

// const contactSlice = createSlice({
//   name: "contacts",
//   initialState: { items: [], filter: "", loading: false, error: null },
//   extraReducers: {
//     [fetchContact.fulfilled]: (state, { payload }) => {
//       state.items = payload;
//       state.loading = false;
//     },
//     [fetchContact.pending]: (state) => {
//       state.loading = true;
//     },
//     [fetchContact.error]: (state, { payload }) => {
//       state.error = payload;
//       state.loading = false;
//     },
//     [addContact.fulfilled]: (state, { payload }) => {
//       state.items = [...state.items, payload];
//       state.loading = false;
//     },
//     [addContact.pending]: (state) => {
//       state.loading = true;
//     },
//     [addContact.error]: (state, { payload }) => {
//       state.error = payload;
//       state.loading = false;
//     },
//     [deleteContact.fulfilled]: (state, { payload }) => {
//       state.items = state.items.filter(({ id }) => id !== payload);
//       state.loading = false;
//     },
//     [deleteContact.pending]: (state) => {
//       state.loading = true;
//     },
//     [deleteContact.error]: (state, { payload }) => {
//       state.error = payload;
//       state.loading = false;
//     },
//     [changeFilter]: (state, { payload }) => {
//       state.filter = payload;
//       state.loading = false;
//     },
//   },
// });

// export default contactSlice.reducer;
