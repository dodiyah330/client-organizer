// store.js

import { configureStore } from '@reduxjs/toolkit';
import personalDetailsReducer from '../reducers/personalDetailsReducer';

const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    // other reducers...
  },
});

export default store;
