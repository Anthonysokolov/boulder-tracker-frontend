import { promiseTimeout } from "index.js";

/********************************* ACTIONS ***********************************/

const FETCH_SESSIONS = "FETCH_SESSIONS";

function fetchAction(data) {
	return {
		type: FETCH_SESSIONS,
		payload: data.map(function(element) {
			return {
				location: element.location,
				date: element.date + " " + element.time.substring(0, 5),
				comments: element.comments,
				id: element.id
			}
		});
	}
}

/********************************* THUNKS ***********************************/

var hardCoded = [
	{location: "Mountains R Us", date: "1/18/2020", time: "18:54:00", comments: "Went out with friends", id: 0},
	{location: "The Rock", date: "1/20/2020", time: "20:30:15", comments: "Solo adventure", id: 1}
];
/**
 * This will be used by frontend components to update the list of sessions
 * in the store. Does not take any parameters because it just accesses database
 * Will dispatch a FETCH_SESSIONS action. 
*/
export function fetchSessionsThunk() {
	return function(dispatch) {
		promiseTimeout(1000).then(function() {
			dispatch(fetchAction(hardCoded));
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