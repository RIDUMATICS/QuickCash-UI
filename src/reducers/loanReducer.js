import { SET_LOAN } from "../actions/type";

const intialState = {
  repayments: [],
};

export default function loanReducer(state = intialState, action) {
  switch (action.type) {
    case SET_LOAN:
      return action.payload;
    default:
      return state;
  }
}
