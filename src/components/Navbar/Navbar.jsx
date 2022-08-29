import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const activeLink = ({ isActive }) => isActive ? styles.activeLink : styles.item;

const Navbar = () => {
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <div>
          <NavLink to="/profile" className={activeLink}>Profile</NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" className={activeLink}>Dialogs</NavLink>
        </div>
        <div>
          <NavLink to="/News" className={activeLink}>News</NavLink>
        </div>
        <div>
          <NavLink to="/Music" className={activeLink}>Music</NavLink>
        </div>
        <div>
          <NavLink to="/Settings" className={activeLink}>Setting</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;