import axios from "../../axios-base";

import history from "../history";
import { toast } from "react-toastify";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_FILES,
} from "./types";

// LOAD USER
export const loadUser = () => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get("/me/", tokenConfig(getState));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// REGISTER USER
export const register = ({ username, email, password1, password2 }) => async (
  dispatch
) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, email, password1, password2 });

  try {
    const res = await axios.post("/rest-auth/registration/", body, config);
    if (res.status === 201) {
      toast.dismiss();
      toast.success("Registration Successful", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const data = error.response.data;
    const errorMessage = `${Object.keys(data)[0]}: ${
      data[Object.keys(data)[0]][0]
    }`;
    toast.dismiss();
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({
      type: REGISTER_FAIL,
    });
  }
  history.push("/");
};

// LOGIN USER
export const login = ({ username, password }) => async (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post("/rest-auth/login/", body, config);

    if (res.status === 200) toast.dismiss();
    toast.success("Login Successful", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const data = error.response.data;
    const errorMessage = `${Object.keys(data)[0]}: ${
      data[Object.keys(data)[0]][0]
    }`;
    toast.dismiss();
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// LOGOUT USER
export const logout = () => async (dispatch, getState) => {
  await axios.post("/rest-auth/logout/", null, tokenConfig(getState));
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  dispatch({
    type: CLEAR_FILES,
  });
};

// helper function
export const tokenConfig = (getState) => {
  // Get token
  const token = getState().auth.key;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

export const multipartTokenConfig = (getState) => {
  // Get token
  const token = getState().auth.key;

  // Headers
  const config = {
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Token ${token}`,
    },
  };

  // if (token) {
  //   config.headers["Authorization"] = `Token ${token}`;
  // }

  return config;
};
