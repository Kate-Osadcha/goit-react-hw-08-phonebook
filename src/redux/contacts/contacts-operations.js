// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as phonebookAPI from './../../services/phonebook-api';

// export const fetchContacts = createAsyncThunk(
//   '/contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await phonebookAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

import axios from 'axios';
import { toast } from 'react-toastify';

import actions from './contacts-actions';

axios.defaults.baseURL = 'https://61e934fc7bc0550017bc6126.mockapi.io';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
    toast.error(error.message);
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
    toast.error(error.message);
  }
};

const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
    toast.error(error.message);
  }
};

// eslint-disable-next-line
export default { fetchContacts, addContact, deleteContact };
