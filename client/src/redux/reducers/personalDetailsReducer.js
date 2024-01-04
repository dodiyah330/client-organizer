// personalDetailsReducer.js

import { createSlice } from '@reduxjs/toolkit';
import { getAllPersonalDetails } from '../actions/personalDetailsActions';

const initialState = {
  personalDetails: [],
  status: 'idle',
  error: null,
};

const personalDetailsSlice = createSlice({
  name: 'personalDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPersonalDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllPersonalDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.personalDetails = action.payload;
      })
      .addCase(getAllPersonalDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default personalDetailsSlice.reducer;
