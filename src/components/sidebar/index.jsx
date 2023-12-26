import styles from "./styles.module.css";
import logo from "./logo.png";

import { Link, useLocation } from "react-router-dom";
import NavigationMenu from "../navigation-menu";

function Sidebar() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  return (
    <div className={styles.sidebarContainer}>
      <Link to={`${role}/dashboard`} className={styles.logo}>
        <img src={logo} alt="Logo" />
      </Link>

      <NavigationMenu />
    </div>
  );
}

export default Sidebar;
