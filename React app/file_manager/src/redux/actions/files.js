import axios from "../../axios-base";
import history from "../history";
import { tokenConfig, multipartTokenConfig } from "./auth";
import { GET_FILES, GET_FILE, ADD_FILE, DELETE_FILE, EDIT_FILE } from "./types";

// GET FileS
export const getFiles = () => async (dispatch, getState) => {
  const res = await axios.get("/file_folder/", tokenConfig(getState));
  dispatch({
    type: GET_FILES,
    payload: res.data,
  });
};

// GET File
export const getFile = (id) => async (dispatch, getState) => {
  const res = await axios.get(`/file_folder/${id}/`, tokenConfig(getState));
  dispatch({
    type: GET_FILE,
    payload: res.data,
  });
};

// ADD File
export const addFile = (formValues) => async (dispatch, getState) => {
  const res = await axios.post(
    "/file_folder/",
    formValues,
    multipartTokenConfig(getState)
  );
  dispatch({
    type: ADD_FILE,
    payload: res.data,
  });
};

// DELETE File
export const deleteFile = (id) => async (dispatch, getState) => {
  await axios.delete(`/file_folder/${id}/`, tokenConfig(getState));
  dispatch({
    type: DELETE_FILE,
    payload: id,
  });
  history.push("/");
};

// EDIT File
export const editFile = (id, formValues) => async (dispatch, getState) => {
  const res = await axios.put(
    `/file_folder/${id}/`,
    formValues,
    tokenConfig(getState)
  );
  dispatch({
    type: EDIT_FILE,
    payload: res.data,
  });
  history.push("/");
};
