import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { authUser } = useContext(AuthContext);
  const location = useLocation();

  // authUser === null //handleTokenExpiration -->autologout & notify to login/register

  if (!authUser) {
    toast("Login or Register", {
      icon: "⚠️",
    });
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
