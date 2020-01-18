import { promiseTimeout } from "./index.js";

/********************************* ACTIONS ***********************************/

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

/********************************* REDUCER ***********************************/
const initialState = {username: "", loggedIn: false};

export default function userReducer(state = initialState, action) {
	switch(action.type) {
		default:
			return state;
	}
}