import { combineReducers } from "redux";
import auth from "./authReducer";
import error from "./errorReducer";
import success from "./successReducer";

export default combineReducers({
  auth,
  error,
  success,
});
