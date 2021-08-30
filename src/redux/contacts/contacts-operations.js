// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../services/contactsApi';

// axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = {
        name,
        number,
      };
      const { data } = await fetchAddContact(newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

//
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
