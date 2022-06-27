import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ThankYou from "../Components/ThankYou";
import AnswersTable from "../Components/UserAnswer/AnswersTable";
import UserAnswer from "../Components/UserAnswer/UserAnswer";
import UserInformation from "../Components/UserInformation/UserInformation";

const Home = lazy(() => import("../Screens/Admin/Main"));
const AuthRoutes = lazy(() => import("./AuthRoutes"));

const index = () => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route path="/admin/*" element={<Home />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/question/:id" element={<UserInformation />} />
        <Route path="/question/answer" element={<UserAnswer />} />
        <Route path="/question/all-answer" element={<AnswersTable />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </React.Suspense>
  );
};

export default index;
