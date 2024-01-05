// personalDetailsReducer.js

import { createSlice } from "@reduxjs/toolkit";
import {
  createPerson,
  deletePersonDetails,
  getAllPersonalDetails,
  getPersonalDetails,
  updatePerson,
} from "../actions/personalDetailsActions";

const initialState = {
  selectedPersonDetails: {},
  allPersonalDetails: [],
  status: "idle",
  error: null,
};

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPersonalDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllPersonalDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allPersonalDetails = action.payload.personal;
      })
      .addCase(getAllPersonalDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createPerson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPerson.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createPerson.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getPersonalDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPersonalDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedPersonDetails = action.payload;
      })
      .addCase(getPersonalDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletePersonDetails.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updatePerson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePerson.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updatePerson.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default personalDetailsSlice.reducer;
