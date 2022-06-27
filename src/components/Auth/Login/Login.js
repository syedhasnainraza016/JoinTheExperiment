import React, { useEffect, useState } from "react";
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  //   const { error } = useSelector((state) => state.user);
  //   const { message } = useSelector((state) => state.like);
  const user = useSelector((state) => state.login.user);
  const loginHandler = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    // console.log(e,"eeeeeeeeeeeeeeeeeeeeeee")
    dispatch(login(data)).then((res) => {
      console.log(res, "eeee");
      localStorage.setItem("user", JSON.stringify(res));
      if (res?.account?.role == "admin") {
        navigate("/admin");
      }
    });
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Join The Experiment
        </Typography>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <Link to="/forgot/password">
          <Typography>Forgot Password?</Typography>
        </Link> */}

        <Button type="submit">Login</Button>

        {/* <Link to="/register">
          <Typography>New User?</Typography>
        </Link> */}
      </form>
    </div>
  );
};

export default Login;
