import axios from "axios";

/********************************* ACTIONS ***********************************/

const FETCH_SESSIONS = "FETCH_SESSIONS";
const CREATE_SESSION = "CREATE_SESSION";
const SET_ERROR = "SET_ERROR";
const LOADING = "loading";
const ERROR = "error";
const SUCCESS = "success";

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

function setStatus(status, message) {
  console.log("setting status");
  return {
    type: SET_ERROR,
    status: status,
    message: message
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
    dispatch(setStatus(LOADING, "Loading past sessions..."));
    axios
      .get("/api/users/1/sessions")
      .then(function(response) {
        dispatch(fetchAction(response.data));
        dispatch(setStatus(SUCCESS, "Fetched data."));
      })
      .catch(function(response) {
        console.log("Error from axios:", response);
        dispatch(setStatus(ERROR, "Could not load user data. Please make sure you are logged in."))
      });
  };
}

/**
 * @param session  an object with two strings: location and comments.
 */
export function createSessionThunk(session) {
  return function(dispatch) {
    dispatch(setStatus(LOADING, "Saving new session..."));
    axios
      .post("/api/sessions/add", session)
      .then(function(response) {
        console.log("added", response);
        dispatch(setStatus(SUCCESS, "Saved"));
        dispatch(createAction(response.data));
      })
      .catch(function(response) {
        console.log("Error from axios:", response);
        dispatch(setStatus(ERROR, "Could not save new bouldering session. Please make sure you are logged in."))
      });
  };
}

/********************************* REDUCER ***********************************/
const initialState = {status: "", message: "", list: []};

export default function sessionsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SESSIONS:
      return Object.assign({}, state, {
        list: action.payload
      });
    case CREATE_SESSION:
      return Object.assign({}, state, {
        list: state.list.concat(action.payload)
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        status: action.status,
        message: action.message
      });
    default:
      return state;
  }
}
