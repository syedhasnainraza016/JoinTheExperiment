import React, { useState, useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import Router from "./routes/index"
import { getQuestions } from "./redux/actions/questionActions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  return (
    <div className="App">
      
      <Router />
    </div>
  );
}

export default App;
