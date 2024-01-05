// api.js

import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchAllPersonalDetails = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}personalDetails/allPersonal`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPersonalDetails = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}personalDetails/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPersonal = async (details) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(
      `${BASE_URL}personalDetails/create`,
      details,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePersonal = async (details) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.put(`${BASE_URL}personalDetails/`, details, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePersonalDetails = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.delete(`${BASE_URL}personalDetails/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
