import { useContext } from "react";
// import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { authUser } = useContext(AuthContext);

  if (authUser === null) {
    toast("Login or Register", {
      icon: "⚠️",
    });
    // return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
