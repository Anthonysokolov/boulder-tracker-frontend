import axios from "axios";
import * as StatusCode from "./index.js";

/********************************* ACTIONS ***********************************/

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const SET_ERROR = "SET_ERROR";

// ACTION CREATORS
const getUser = user => {
  return {
    type: GET_USER,
    payload: user
  }
}

/**
 * Makes an action that will update the status code and message of this slice
 * of the Redux store. Please use it to indicate the progress of some process.
 * Call it before and after an asynchronous action. This will let subscribed
 * components change their state when the status is right.
 * @param statusCode  a constant from StatusCode (index.js)
 * @param message     a string to show the user 
*/
function setStatus(statusCode, message) {
  return {
    type: SET_ERROR,
    status: statusCode,
    message: message
  };
}

/********************************* THUNKS ***********************************/

/**
 * Just a template function, will be replaced by something soon.
*/
export function loginThunk(email, password) {
  return async dispatch => {
    dispatch(setStatus(StatusCode.LOADING, "Logging in..."));
    let res;
    try {
      res = await axios.post("/auth/login", { username:email, password }, { withCredentials: true });
      console.log("Response from logging in: ", res);
      dispatch(setStatus(StatusCode.SUCCESS, "Welcome Back!"));
    }
    catch (authError) {
      dispatch(setStatus(StatusCode.ERROR, "Wrong username or password."));
    }
  }
}

/********************************* REDUCER ***********************************/
const initialState = {username: "", loggedIn: false};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		default:
			return state;
	}
}
