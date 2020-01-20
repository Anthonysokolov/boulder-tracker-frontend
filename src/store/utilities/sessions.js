import axios from "axios";

/********************************* ACTIONS ***********************************/

const FETCH_SESSIONS = "FETCH_SESSIONS";
const CREATE_SESSION = "CREATE_SESSION";

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

function createAction(data) {
	return {
		type: CREATE_SESSION,
		payload: data
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

/** 
 * @param session  an object with two strings: location and comments.
*/
export function createSessionThunk(session) {
	return function(dispatch) {
		axios.post("/api/sessions/add", session)
		.then(function(response) {
			console.log("added", response);
			dispatch(createAction(response.data));
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
		case CREATE_SESSION:
			return state.concat(action.payload);
		default:
			return state;
	}
}