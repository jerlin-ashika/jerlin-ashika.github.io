import * as types from "./actionType";

const initialState = {
  darkMode: false,
};

const StaticReducer = (state = initialState, action) => {
  console.log("value is coming to this page ", action, state);
  switch (action.type) {
    case types.CHANGE_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    default:
      return state;
  }
};

export default StaticReducer;
