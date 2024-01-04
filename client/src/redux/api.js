// api.js

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchAllPersonalDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}personalDetails/allPersonal`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
