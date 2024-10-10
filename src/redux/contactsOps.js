import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://6707b5768e86a8d9e42c96f3.mockapi.io`;

export const fetchContacts = createAsyncThunk(
  'fetchData',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteData',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThaunk = createAsyncThunk(
  'addData',
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
//   const { data } = await axios.get(`/contacts`);
//   dispatch(fetchDataSucces(data));
// };
