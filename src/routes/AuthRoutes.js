import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// const Packages = lazy(() => import("../screens/Main/Admin/Package/Packages"));
// const Companies = lazy(() => import("../screens/Main/Admin/Company/Company"));
const Login = lazy(() => import("../components/Auth/Login/Login"));
const Register = lazy(() => import("../components/Auth/register/Register"));

function AuthRoutes() {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Suspense>
  );
}

export default AuthRoutes;
