import * as actionTypes from "../actions/actionTypes";

const userData = {
  users: [],
  user: null,
};

const usersReducer = (state = userData, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return { ...state, user: action.result };
    default:
      return state;
  }
};


export default usersReducer;