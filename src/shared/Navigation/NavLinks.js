import "./NavLinks.css";
import { NavLink } from "react-router-dom";
const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/U1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATION</NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;
