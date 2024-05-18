import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function NavBar() {
  const { setAuthUser, authUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("token");
    document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    navigate("/"); //back to landing
  };

  if (authUser) {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <span>{authUser.username}</span>
        <button onClick={handleLogout}>Sign Out</button>
      </nav>
    );
  }

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp; | &nbsp;
      <NavLink to="/register">Register</NavLink>
      &nbsp;&nbsp;
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
