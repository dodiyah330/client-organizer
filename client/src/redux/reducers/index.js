// reducers/index.js
import { combineReducers } from 'redux';
import personalDetailsReducer from './personalDetailsReducer';

const rootReducer = combineReducers({
  personalDetails: personalDetailsReducer,
  // Add more reducers as needed
});

export default rootReducer;
