import classes from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { login } from "../../store/Actions/authActions";
import { useRouter } from "next/router";
const Login = () => {
  const loggedIn = useSelector((state) => state.auth?.user?.loggedIn);
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submit = async (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };
    console.log(loggedIn, "loged");
    dispatch(login(loginUser));
  };
  if (loggedIn) {
    router.push("/dashboard");
  }
  return (
    <div className={classes.LoginForm}>
      <form onSubmit={submit}>
        <h1>Login</h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        ></input>

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
        <button type="submit">
          {" "}
          <p>Login</p>
        </button>
      </form>
    </div>
  );
};

export default Login;
