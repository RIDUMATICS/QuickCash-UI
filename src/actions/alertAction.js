import { GET_ALERT } from "./type";
import _ from "lodash";
import { logoutUser } from "./authAction";

export const clearAlert = () => ({
  type: GET_ALERT,
  payload: {
    component: "",
    message: "",
    type: "",
  },
});

export const showAlert = (payload) => (dispatch) => {
  setTimeout(() => dispatch(clearAlert()), 3000);
  dispatch({
    type: GET_ALERT,
    payload,
  });
};

export const errorHandler = (err) => (dispatch) => {
  console.log(err);
  let errorResp = err.response?.data?.error || "Server Error, Please try again";
  let status = err.response?.status || 500;

  if (status === 401) {
    errorResp = "Session expired, Login";
    dispatch(logoutUser());
  }

  dispatch(
    showAlert({
      component: "dashboard",
      message: errorResp,
      type: "alert-danger",
    })
  );
};
