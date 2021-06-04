import axios from "axios";
import { errorHandler } from "./alertAction";
import { SET_LOAN, SET_LOANS } from "./type";

// create a loan
export const createLoan = (data) => (dispatch) => {
  return axios
    .post("/api/v1/loans", data)
    .then((res) => {
      const { loan } = res.data.data;
      return loan;
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

// calculate a loan
export const calculateLoan = (data) => (dispatch) => {
  return axios
    .get("/api/v1/loans/calculate", {
      params: data,
    })
    .then((res) => {
      const { data } = res.data;
      return data;
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

// get all loans
export const getAllLoans = () => (dispatch) => {
  return axios
    .get("/api/v1/loans")
    .then((res) => {
      console.log(res.data);
      const { loans } = res.data.data;
      dispatch({ type: SET_LOANS, payload: loans });
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

// get all loans
export const getLoanById = (id) => (dispatch) => {
  return axios
    .get(`/api/v1/loans/${id}`)
    .then((res) => {
      const { loan } = res.data.data;
      dispatch({ type: SET_LOAN, payload: loan });
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};
