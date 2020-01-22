import { promiseTimeout } from "./index.js";
const axios = require('axios')

/********************************* ACTIONS ***********************************/
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

// ACTION CREATORS
const getUser = user => {
  return {
    type: GET_USER,
    payload: user
  }
}

/********************************* THUNKS ***********************************/

/**
 * Just a template function, will be replaced by something soon.
*/
export function loginThunk() {
	return function(dispatch) {
		promiseTimeout(1000).then(function() {
			//dispatch(some action here);
		})
	}
}

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/auth/${method}`, { username:email, password }, { withCredentials: true });
  }
  catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
  }
  catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
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
