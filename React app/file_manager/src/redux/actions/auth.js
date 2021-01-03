import axios from "../../axios-base";

import history from "../history";

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
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
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
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
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
