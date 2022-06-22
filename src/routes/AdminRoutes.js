import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// const Packages = lazy(() => import("../screens/Main/Admin/Package/Packages"));
// const Companies = lazy(() => import("../screens/Main/Admin/Company/Company"));
const Dashboard = lazy(() =>
  import("../Screens/Admin/Dashboard")
);
const QuestionScreen = lazy(() =>
  import("../Screens/Admin/QuestionScreen")
);

const TranslationScreen = lazy(() =>
  import("../Screens/Admin/TranslationScreen")
);

function AppRoutes() {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Routes>
        <Route  path="/" element={<Dashboard />} />
        <Route  path="/question" element={<QuestionScreen />} />
        <Route  path="/translation" element={<TranslationScreen />} />
      </Routes>
    </React.Suspense>
  );
}

export default AppRoutes;