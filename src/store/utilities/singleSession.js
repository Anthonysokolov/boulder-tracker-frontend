import { promiseTimeout } from "./index.js";

/********************************* ACTIONS ***********************************/

/********************************* THUNKS ***********************************/

/**
 * Just a template function, will be replaced by something
 */
export function getSessionThunk() {
  return function(dispatch) {
    promiseTimeout(1000).then(function() {
      //dispatch(some action);
    });
  };
}

/********************************* REDUCER ***********************************/
const initialState = {};

export default function singleSessionReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
