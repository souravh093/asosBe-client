import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RootContext } from "../Provider/Provider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(RootContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
