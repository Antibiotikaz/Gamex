import { Cookies } from "react-cookie";

import * as types from "../types";
const initialState = {
  isLoaded: false,
};

const cookie = new Cookies();

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      cookie.set("token", action.payload.token, { path: "/" });
      return {
        ...state,
        isLoaded: true,
        user: action.payload,
      };

    case types.USER_LOADED:
      cookie.get("token");
      return {
        ...state,
        isLoaded: true,
        user: action.payload,
      };
    case types.USER_UPDATES_HEALTH:
      return {
        ...state,
        user: action.payload,
      };
    case types.USER_DATA_AFTER_ATTACK:
      return {
        ...state,
        user: action.payload,
      };
      case types.NEW_STATS_AFTER_BATTLE:
        return {
          ...state,
          msg: "very gud"
        };
        case types.USER_STATS_RESET:
          return {
            ...state,
            user: action.payload,
          };
    default:
      return state;
  }
};

export default authReducer;
