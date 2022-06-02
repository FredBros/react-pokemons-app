import React from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from "./services/authentication-service";

const PrivateRoute = ({ children }: { children: any }) => {
  const isAuthenticated = AuthenticationService.isAuthenticated;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
