import axios from "axios";

/********************************* ACTIONS ***********************************/

const FETCH_SESSIONS = "FETCH_SESSIONS";

function fetchAction(data) {
	return {
		type: FETCH_SESSIONS,
		payload: data.map(function(element) {
			return {
				location: element.location,
				date: element.date,
				comments: element.comments,
				id: element.id
			};
		})
	};
}

/********************************* THUNKS ***********************************/

/**
 * This will be used by frontend components to update the list of sessions
 * in the store. Does not take any parameters because it just accesses database
 * Will dispatch a FETCH_SESSIONS action. 
*/
export function fetchSessionsThunk() {
	return function(dispatch) {
		axios.get("/api/users/1/sessions")
		.then(function(response) {
			dispatch(fetchAction(response.data));
		})
		.catch(function(response) {
			console.log("Error from axios:", response);
		})
	}
}

/********************************* REDUCER ***********************************/
const initialState = [];

export default function sessionsReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_SESSIONS:
			return action.payload;
		default:
			return state;
	}
}