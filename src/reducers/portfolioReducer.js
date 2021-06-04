import { SET_PORTFOLIO_VALUE } from "../actions/type";

const intialState = {
  value: 0,
};

export default function portfolioReducer(state = intialState, action) {
  switch (action.type) {
    case SET_PORTFOLIO_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
