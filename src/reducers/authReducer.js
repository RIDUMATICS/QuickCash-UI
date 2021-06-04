import { SET_CURRENT_USER } from "../actions/type.js";
import _ from "lodash";

const intialState = {
  isAuthenticated: false,
  user: {},
};

export default function authReducer(state = intialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !_.isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
