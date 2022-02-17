import "./menu.css";

import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="Menu">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/User">User</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
