import axios from "axios";
import { SET_CURRENT_USER } from "./type";
import { errorHandler, showAlert } from "./alertAction";
import setAuthToken from "../utils/setAuthToken";

// Register User
export const registerUser = (data, history) => (dispatch) => {
  return axios
    .post("/api/v1/auth/signup", data)
    .then((res) => {
      const { token, user } = res.data.data;
      dispatch(setAuth(user, token));

      dispatch(
        showAlert({
          message: ["Registration successful"],
          type: "alert-success",
        })
      );
      return history.push("/profile");
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

// Login User
export const loginUser = (data, history) => (dispatch) => {
  return axios
    .post("/api/v1/auth/login", data)
    .then((res) => {
      console.log(res.data);
      const { token, user } = res.data.data;
      dispatch(setAuth(user, token));

      dispatch(
        showAlert({
          message: [`Welcome back, ${user.name}`],
          type: "alert-success",
        })
      );
      return history.push("/profile");
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

// Update User Details
export const updateDetails = (data) => (dispatch) => {
  return axios
    .patch("/api/v1/user", data)
    .then((res) => {
      const { user } = res.data.data;
      dispatch({
        type: SET_CURRENT_USER,
        payload: user,
      });

      dispatch(
        showAlert({
          message: ["Updated successfully"],
          type: "alert-success",
        })
      );
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

// Update User Details
export const changePassword = (data) => (dispatch) => {
  return axios
    .patch("/api/v1/user/change-password", data)
    .then((res) => {
      dispatch(
        showAlert({
          message: ["Updated successfully"],
          type: "alert-success",
        })
      );
    })
    .catch((err) => {
      dispatch(errorHandler(err));
    });
};

export const setAuth = (user, token) => (dispatch) => {
  // save token to localStorage
  localStorage.setItem("token", token);
  // set token to Auth header
  setAuthToken(token);

  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });
};

export const clearCurrentUser = () => {
  // Remove token and user-details from localStorage
  localStorage.removeItem("token");

  // Remove auth header for future requests
  setAuthToken(false);

  return {
    type: SET_CURRENT_USER,
    payload: {},
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  dispatch(clearCurrentUser());

  dispatch(
    showAlert({
      message: ["You have been logged out successfully"],
      type: "alert-success",
    })
  );
};
