import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "../components/organisms/LoginForm";
import RegistrationForm from "../components/organisms/RegistrationForm";
import ProtectedRoute from "../components/utils/ProtectedRoute";
import NotFound from "../components/organisms/NotFound";

const RouterHandler = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<LoginForm />} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RouterHandler;
