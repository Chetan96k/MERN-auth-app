import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const username = localStorage.getItem("loggedInUser");
  return username ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
