import styles from "./styles.module.css";

import { NavLink, useLocation } from "react-router-dom";
import { MENU } from "./constants";

function NavigationMenu() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  return (
    <nav className={styles.navWrapper}>
      {MENU.map((item) => (
        <NavLink
          className={styles.navItemWrapper}
          to={`${role}/${item.href}`}
          key={item.id}
        >
          <div className={styles.iconWrapper}>{item.icon}</div>
          <p className={styles.title}>{item.title}</p>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavigationMenu;