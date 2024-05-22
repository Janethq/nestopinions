import { useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { isTokenExpired, removeToken } from "../utils/services/clientToken";

const ProtectedRoute = ({ children }) => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // authUser === null //handleTokenExpiration -->autologout & notify to login/register

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (isTokenExpired()) {
        //notify user
        toast("Session expired. Please log in again.", {
          icon: "⚠️",
        });
        //autologout
        setAuthUser(null);
        removeToken();
        navigate("/login", { state: { from: location } });
      }
    };

    //immediately ceckTokenExpiration and use interval for periodic checks (5s)
    checkTokenExpiration();

    const interval = setInterval(checkTokenExpiration, 5000);

    //clean up
    return () => clearInterval(interval);
  }, [navigate, setAuthUser, location]);

  if (!authUser) {
    toast("Login or Register", {
      icon: "⚠️",
    });
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
