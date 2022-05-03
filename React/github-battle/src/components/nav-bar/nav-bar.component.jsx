import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "../../contexts/theme";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

import "./nav-bar.style.scss";

const style = ({ isActive }) => ({
  color: isActive ? 'rgb(187, 46, 31)' : '#000',
});

const NavBar = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink exact to="/" style={style} >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="/battle" style={style}>
                Battle
              </NavLink>
            </li>
          </ul>
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <FaLightbulb size="40" color="#1C2022" />
            ) : (
              <FaRegLightbulb size="40" color="#FFD679" />
            )}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
};

export default NavBar;
