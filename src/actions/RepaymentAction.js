import axios from "axios";
import { errorHandler } from "./alertAction";

// Post repayment
export const postRepayment = (loanId, history) => (dispatch) => {
  return axios
    .post(`/api/v1/loans/repayment/${loanId}`)
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

// Verify repayment
export const verifyRepayment = (data, history) => (dispatch) => {
  return axios
    .post("/api/v1/loans/repayment/verify", data)
    .then((res) => {
      return "Payment successful";
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};
