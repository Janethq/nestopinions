import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { removeToken } from "../../utils/services/clientToken";

export default function NavBar() {
  const { setAuthUser, authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthUser(null);
    removeToken(); //localStorage.removeItem("token");
    toast.success("You have successfully logged out.");
    navigate("/"); //back to landing
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="h-8 w-auto"
          src="assets/logo/icons8-real-estate-96.png"
          alt="NestOpinion Logo"
        />
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          NestOpinion
        </NavLink>
      </div>
      <div className="flex items-center space-x-4">
        {authUser ? (
          <>
            <NavLink
              to={`/dashboard`}
              className="flex items-center text-gray-900 hover:text-indigo-600"
            >
              <span>
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
              </span>
              Hi, {authUser.username}!
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-sm font-semibold text-gray bg-red-300 hover:bg-red-400 px-3 py-1.5 rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/register"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
