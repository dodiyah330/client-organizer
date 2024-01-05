// personalDetailsActions.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllPersonalDetails,
  deletePersonalDetails,
  createPersonal,
  fetchPersonalDetails,
  updatePersonal,
} from "../api";

export const getAllPersonalDetails = createAsyncThunk(
  "personalDetails/getAllPersonalDetails",
  async () => {
    const data = await fetchAllPersonalDetails();
    return data;
  }
);

export const getPersonalDetails = createAsyncThunk(
  "personalDetails/getPersonalDetails",
  async (id) => {
    const data = await fetchPersonalDetails(id);
    return data;
  }
);

export const createPerson = createAsyncThunk(
  "personalDetails/createPerson",
  async (details) => {
    const data = await createPersonal(details);
    return data;
  }
);

export const updatePerson = createAsyncThunk(
  "personalDetails/updatePerson",
  async (details) => {
    const data = await updatePersonal(details);
    return data;
  }
);

export const deletePersonDetails = createAsyncThunk(
  "personalDetails/deletePersonalDetails",
  async (id) => {
    const data = await deletePersonalDetails(id);
    return data;
  }
);
