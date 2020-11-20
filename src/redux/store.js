import { createStore } from "redux";
import initialState from "./initialState";

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_EYE":
      return { ...state, eye: action.eye };
    case "ALL":
      return { ...state, eye: "" };
    default:
      return { ...state, eye: action.eye };
  }
}

let store = createStore(counterReducer);

export default store;
