import axios from "axios";

/********************************* ACTIONS ***********************************/

const SELECT_SESSION = "SELECT_SESSION";
const ADD_CLIMB = "ADD_CLIMB";
const SET_ERROR = "SET_ERROR";
const LOADING = "loading";
const ERROR = "error";
const SUCCESS = "success";

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

function addProblem(problem) {
  return {
    type: ADD_CLIMB,
    payload: problem
  };
}

function setStatus(status, message) {
  return {
    type: SET_ERROR,
    status: status,
    message: message
  };
}

/********************************* THUNKS ***********************************/

const nonexistantSession = {
  id: 1,
  location: "",
  date: "",
  comments: "",
  climbs: [],
  exists: false
};

const nonexistantProblem = {
  id: 1,
  name: "",
  grade: 0,
  attempts: 0,
  sends: 0,
  comments: "",
  exists: false
};

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
    dispatch(setStatus(LOADING, "Loading..."));
    axios
      .get("/api/sessions/" + id)
      .then(function(response) {
        dispatch(selectAction(response.data));
        dispatch(setStatus(SUCCESS, "Received session"));
      })
      .catch(function() {
        // nonexistantSession.id = id;
        // dispatch(selectAction(nonexistantSession));
        dispatch(setStatus(ERROR, "This session was not found. Perhaps it was deleted, or you followed a broken link."));
      });
  };
}

export function addClimbThunk(climbInfo) {
  return function(dispatch) {
    axios
      .post("/api/problems/add", climbInfo)
      .then(function(response) {
        console.log("added climb: ", response);
        dispatch(addProblem(response.data));
      })
      .catch(function(error) {
        console.log("axios error: ", error);
      });
  };
}

/********************************* REDUCER ***********************************/
const initialState = {};

export default function singleSessionReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_SESSION:
      return Object.assign({}, state, action.payload);
    case ADD_CLIMB:
      return Object.assign({}, state, {
        problems: state.problems.concat(action.payload)
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
