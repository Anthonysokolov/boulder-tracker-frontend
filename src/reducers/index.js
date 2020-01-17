// barrel file for reducers so that we can pass them into combineReducers;
// be mindful of naming here because the names in this file will be the name(s) of the keys in your Redux store;
// all we are doing here is grabbing the default export of each utility file aka the reducer functions we will need to pass to combineReducers;
export { default as rootReducer } from "../store/utilities/index";
