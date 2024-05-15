import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../utilities/users-service";

export default function NavBar({ setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp; | &nbsp;
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/Login">Login</NavLink>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
