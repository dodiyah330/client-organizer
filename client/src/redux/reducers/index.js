// reducers/index.js
import { combineReducers } from 'redux';
import personalDetailsReducer from './personalDetailsReducer';
import businessDetailsReducer from './businessDetailsReducer';

const rootReducer = combineReducers({
  personalDetails: personalDetailsReducer,
  businessDetails: businessDetailsReducer,
  // Add more reducers as needed
});

export default rootReducer;
