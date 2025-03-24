import React from "react";
// import Loader from "./Loader";
import { Navigate, Outlet } from "react-router-dom";
import userAuthStatus from "../hook/useAuthStatus";

const PrivateComponent = () => {
  const { isLoggedIn, checkStatus } = userAuthStatus();

  if (checkStatus) {
    return (
      <h1 className="h-screen flex items-center justify-center text-4xl">
        Loading
      </h1>
    );
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateComponent;
