import axios from "axios";
import { errorHandler, showAlert } from "./alertAction";
import { SET_PORTFOLIO_VALUE } from "./type";

// Get user portfolio value
export const getPortfolioValue = (data, history) => (dispatch) => {
  return axios
    .get("/api/v1/user/portfolios/value")
    .then((res) => {
      const { portfolioValue } = res.data.data;
      dispatch({
        type: SET_PORTFOLIO_VALUE,
        payload: portfolioValue,
      });
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};
