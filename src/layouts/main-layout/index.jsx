import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Main from "../../components/main";

function MainLayout() {
  return (
    <div className={styles.mainLayoutContainer}>
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default MainLayout;
