import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  const location = useLocation()
  const pathname = location.pathname
  console.log(pathname);

  if (loading) {
    return <div>Loading</div>;
  }

  if (user) {
    return children
  }
  return <Navigate to="/login" state={{pathname}}></Navigate>;
};

export default PrivateRoutes;
