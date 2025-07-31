import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const username = localStorage.getItem("loggedInUser");
  return username ? <Navigate to="/home" replace /> : children;
};

export default PublicRoute;
