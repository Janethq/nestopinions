import { useContext, useEffect, useRef } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { isTokenExpired, removeToken } from "../utils/services/clientToken";
import debug from "debug";

const log = debug("mern:ProtectedRoutes");

const ProtectedRoute = ({ children }) => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const hasNotified = useRef(false); //adding flag to prevent double toast notification

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (isTokenExpired()) {
        if (!hasNotified.current) {
          //notify user
          toast("Session expired. Please log in again.", {
            icon: "⚠️",
          });
          hasNotified.current = true;
        }
        //autologout
        setAuthUser(null);
        removeToken();
        navigate("/login");
      }
    };

    //immediately ceckTokenExpiration and use interval for periodic checks (5s)
    checkTokenExpiration();

    const interval = setInterval(checkTokenExpiration, 5000);
    log(interval);
    //clean up
    return () => clearInterval(interval);
  }, [navigate, setAuthUser]);

  if (!authUser) {
    toast("Login or Register", {
      icon: "⚠️",
    });
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
