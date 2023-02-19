import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const withAuthRedirect = (Component, destination = "/") => {
  const AuthRedirect = (props) => {
    const user = useSelector((state) => state.user.value.user);
    const shouldRedirect = user !== null;

    if (shouldRedirect) {
      return <Navigate to={destination} replace />;
    }

    return <Component {...props} />;
  };

  return AuthRedirect;
};

export default withAuthRedirect;
