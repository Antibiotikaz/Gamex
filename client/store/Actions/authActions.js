import * as types from "../types";
import axios from "axios";
import { Cookies } from "react-cookie";
//login user

export const login = ({ email, password }) => (dispatch) => {
  const body = { email, password };

  try {
    axios
      .post("http://localhost:9000/users/login", body)
      .then((res) => {
        dispatch({
          type: types.LOGIN_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch {}
};

export const loadUser = () => (dispatch, getState) => {
  axios
    .get("http://localhost:9000/users", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: types.USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
// setup config/headers and token
export const tokenConfig = () => {
  const cookie = new Cookies();

  const token = cookie.get("token");

  // headers
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };

  //iff token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
