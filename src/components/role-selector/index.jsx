import styles from "./styles.module.css";
import { NavLink, useLocation } from "react-router-dom";

function RoleSelector() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  return (
    <nav className={styles.navContainer}>
      <NavLink
        to="/admin/login"
        className={`${styles.navItem} ${role == "admin" && styles.active}`}
      >
        Admin
      </NavLink>
      <NavLink
        to="/user/login"
        className={`${styles.navItem} ${role == "user" && styles.active}`}
      >
        User
      </NavLink>
    </nav>
  );
}

export default RoleSelector;
