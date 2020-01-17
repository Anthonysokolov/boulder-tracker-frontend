const TESTER = "TESTER";

/** This function is for mocking an API call with Promises. It should be
 * used with hardcoded data.
 * @param time  the amount of time in milliseconds to wait
 * @return      a promise, which passes the time as a parameter
 */
function promiseTimeout(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}

// ACTION CREATORS;
function testing() {
  return { type: TESTER, testingMesssage: "hello world" };
}

// THUNKS;
// These will be called in the anonymous function of our mapDispatch of one of our React components;
export function testingThunk() {
  return function(dispatch) {
    promiseTimeout(1000).then(() => {
      console.log("hello?");
      dispatch(testing());
    });
  };
}

// REDUCER;
const initialState = {
  TEST_LIST: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TESTER:
      return Object.assign({}, state, {
        TEST_LIST: action.testingMessage
      });
    default:
      return state;
  }
}

export default rootReducer;
