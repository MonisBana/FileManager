import { combineReducers } from "redux";
import authReducer from "../redux/reducers/auth";
import fileReducer from "../redux/reducers/files";

export const rootReducer = combineReducers({
  auth: authReducer,
  files: fileReducer,
});
