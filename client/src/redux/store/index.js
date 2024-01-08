// store.js

import { configureStore } from '@reduxjs/toolkit';
import personalDetailsReducer from '../reducers/personalDetailsReducer';
import businessDetailsReducer from '../reducers/businessDetailsReducer';

const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    businessDetails: businessDetailsReducer,
    // other reducers...
  },
});

export default store;
