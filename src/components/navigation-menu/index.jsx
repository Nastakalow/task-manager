import styles from "./styles.module.css";

import { NavLink, useLocation } from "react-router-dom";
import { MENU } from "./constants";
import { useEffect, useState } from "react";

function NavigationMenu() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case `/${role}/dashboard`:
        setActiveTab(0);
        break;
      case `/${role}/tasks`:
        setActiveTab(1);
        break;
      case `/${role}/tasks/${location.pathname.split("/")[3]}`:
        setActiveTab(1);
        break;
      case `/${role}/create-user`:
        setActiveTab(2);
        break;
      default:
        setActiveTab(0);
        break;
    }
  }, [pathname]);

  return (
    <nav className={styles.navList}>
      {MENU.map((item, index) => {
        return index === 2 && role === "user" ? null : (
          <NavLink
            key={item.id}
            className={`${styles.navItem} ${
              activeTab === index && styles.active
            }`}
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
