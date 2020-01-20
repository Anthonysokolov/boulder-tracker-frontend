import axios from "axios";

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
export function getSessionThunk(id) {
	return function(dispatch) {
		axios.get("/api/sessions/" + id)
		.then(function(response) {
			console.log("api: ", response);
			//this will be the data received from the response
			response.data.exists = true;
			dispatch(selectAction(response.data));
		})
		.catch(function() {
			nonexistantSession.id = id;
			dispatch(selectAction(nonexistantSession))
		});
	}
}

/********************************* REDUCER ***********************************/
const initialState = {};

export default function singleSessionReducer(state = initialState, action) {
	switch(action.type) {
		case SELECT_SESSION:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}
