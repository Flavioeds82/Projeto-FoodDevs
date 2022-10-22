import { combineReducers } from "redux";
import UserReducer from "./UserReducers";

export default combineReducers({
   user: UserReducer
});