import { combineReducers } from "redux";
import UserReducer from "./UserReducers";
import CartReducer from "./CartReducer"

export default combineReducers({
   user: UserReducer,
   cart: CartReducer
});