import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";

export function AppRoutes() {
  return (
    <Routes>
      {/* /login/repositories */}
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
