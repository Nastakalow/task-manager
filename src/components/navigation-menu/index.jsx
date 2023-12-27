import styles from "./styles.module.css";

import { NavLink, useLocation } from "react-router-dom";
import { MENU } from "./constants";

function NavigationMenu() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  return (
    <nav className={styles.navWrapper}>
      {MENU.map((item, index) => {
        return index === 2 && role === "user" ? null : (
          <NavLink
            key={item.id}
            className={styles.navItemWrapper}
            to={`${role}/${item.href}`}
          >
            <div className={styles.iconWrapper}>{item.icon}</div>
            <p className={styles.title}>{item.title}</p>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavigationMenu;
