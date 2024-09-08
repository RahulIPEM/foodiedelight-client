import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { store } from "../../store";

const ProtectedRoute = ({ element, ...rest }) => {
  const { state } = useContext(store);
  const { loggedInState } = state;

  return loggedInState.isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
