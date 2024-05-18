import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      &nbsp; | &nbsp;
      <NavLink to="/register">Register</NavLink>
      &nbsp; | &nbsp;
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
