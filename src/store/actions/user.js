import axios from "axios";
import * as actionTypes from "../actions/actionTypes";

export const signUpUser = ({ name, email, password }) => async (dispatch) => {
  const saveUser = (res) => {
    dispatch({
      type: actionTypes.SIGNUP,
      result: res,
    });
  };

  try {
    const res = await axios.post("http://localhost:5000/api/users/signup", {
      name,
      email,
      password,
    });
    return saveUser(res.data.user);
  } catch (err) {
    console.log(err);
  }
};
