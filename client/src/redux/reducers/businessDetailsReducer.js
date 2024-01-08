// businessDetailsReducer.js

import { createSlice } from "@reduxjs/toolkit";
import {
  createBusinessDetails,
  deleteBusinessDetail,
  getAllBusinessDetails,
  getBusinessDetails,
  updateBusinessDetails,
} from "../actions/businessDetailsAction";

const initialState = {
  selectedBusinessDetails: {},
  allBusinessDetails: [],
  status: "idle",
  error: null,
};

const businessDetailsSlice = createSlice({
  name: "businessDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBusinessDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBusinessDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allBusinessDetails = action.payload.businesses;
      })
      .addCase(getAllBusinessDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createBusinessDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBusinessDetails.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createBusinessDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getBusinessDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBusinessDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedBusinessDetails = action.payload;
      })
      .addCase(getBusinessDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBusinessDetail.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updateBusinessDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateBusinessDetails.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updateBusinessDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default businessDetailsSlice.reducer;
