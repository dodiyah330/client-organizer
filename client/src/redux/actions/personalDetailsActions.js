// personalDetailsActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllPersonalDetails } from '../api';

export const getAllPersonalDetails = createAsyncThunk(
  'personalDetails/getAllPersonalDetails',
  async () => {
    const data = await fetchAllPersonalDetails();
    return data;
  }
);
