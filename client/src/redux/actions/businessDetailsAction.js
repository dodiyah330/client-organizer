// businessDetailsActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllBusinessDetails,
  deleteBusinessDetails,
  createBusiness,
  fetchBusinessDetails,
  updateBusiness,
} from "../api";

export const getAllBusinessDetails = createAsyncThunk(
  "businessDetails/getAllBusinessDetails",
  async () => {
    const data = await fetchAllBusinessDetails();
    return data;
  }
);

export const getBusinessDetails = createAsyncThunk(
  "businessDetails/getBusinessDetails",
  async (id) => {
    const data = await fetchBusinessDetails(id);
    return data;
  }
);

export const createBusinessDetails = createAsyncThunk(
  "businessDetails/createBusiness",
  async (details) => {
    const data = await createBusiness(details);
    return data;
  }
);

export const updateBusinessDetails = createAsyncThunk(
  "businessDetails/updateBusiness",
  async (details) => {
    const data = await updateBusiness(details);
    return data;
  }
);

export const deleteBusinessDetail = createAsyncThunk(
  "businessDetails/deleteBusinessDetails",
  async (id) => {
    const data = await deleteBusinessDetails(id);
    return data;
  }
);
