import { promiseTimeout } from "./index.js";

/********************************* ACTIONS ***********************************/

const SELECT_SESSION = "SELECT_SESSION";

/**
 * Expects an object with the following shape:
 *		string location, string date, string comments, boolean exists, int id,
 *		array climbs[]
*/
function selectAction(data) {
	return {
		type: SELECT_SESSION,
		payload: data
	};
}

/********************************* THUNKS ***********************************/

const hardcodedSession = {location: "Mountains R Us", date: "18-01-2020 18:54:00", comments: "went out with friends", climbs: [], id: 0};
const nonexistantSession = {location: "", date: "", comments: "", climbs: [], id: 1, exists: false};

/**
 * Will fetch detailed information about a session from the API.
 * @pre       the session should exist
 * @param id  the numerical ID of the requested session. 
 * @post      the selectAction() creator will be called with the data from
 *            response if the operation was succesful. Otherwise, it will
 *            be given an object with the expected shape but empty fields
 *            and the exists flag will be false on the object.
*/
export function fetchSessionsThunk(id) {
	return function(dispatch) {
		promiseTimeout(1000)
		.then(function() {
			//this will be the data received from the response
			hardcodedSession.exists = true;
			dispatch(selectAction(hardcodedSession));
		})
		.catch(function() {
			dispatch(selectAction(nonexistantSession))
		});
	}
}

/********************************* REDUCER ***********************************/
const initialState = {};

export default function singleSessionReducer(state = initialState, action) {
	switch(action.type) {
		case SELECT_SESSION:
			return Object.assign({}, state, payload);
		default:
			return state;
	}
}