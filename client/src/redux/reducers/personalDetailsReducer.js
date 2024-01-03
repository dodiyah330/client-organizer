// reducers/personalDetailsReducer.js
const initialState = {
  // Your initial state here
  data: [],
};

const personalDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSONAL_DETAILS":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    // Add more cases as needed
    default:
      return state;
  }
};

export default personalDetailsReducer;
