import React, { useState, useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import Router from "./routes/index";
import { getQuestions } from "./redux/actions/questionActions";
import { ToastContainer, Slide } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: false,
  pauseOnHover: true,
  transition: Slide,
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  return (
    <div className="App">
      <ToastContainer {...toastOptions} />
      <Router />
    </div>
  );
}

export default App;
