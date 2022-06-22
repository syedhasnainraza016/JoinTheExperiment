import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";






const Home = lazy(() => import("../Screens/Admin/Main"));
const AuthRoutes = lazy(() => import("./AuthRoutes"));


const index = () => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Routes>
      <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route  path="/admin/*" element={<Home />} />
        <Route  path="/auth/*" element={<AuthRoutes/>} />
       
      </Routes>
    </React.Suspense>
  );
};

export default index;
