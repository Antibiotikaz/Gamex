import { combineReducers } from "../../node_modules/redux";
import authReducer from "./authReducer";
import enemyReducer from "./enemyReducer";
import generalReducer from "./generalReducer";

export default combineReducers({
  auth: authReducer,
  enemy: enemyReducer,
  general: generalReducer
});
