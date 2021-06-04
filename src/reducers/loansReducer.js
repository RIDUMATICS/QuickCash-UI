import { SET_LOANS } from "../actions/type";

const intialState = [];

export default function loansReducer(state = intialState, action) {
  switch (action.type) {
    case SET_LOANS:
      return action.payload;
    default:
      return state;
  }
}
