import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="cyan lighten-2">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Foods Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export { Header };
