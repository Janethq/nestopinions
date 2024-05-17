import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function NavBar() {
  const { setAuthUser, authUser } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem("token");
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
