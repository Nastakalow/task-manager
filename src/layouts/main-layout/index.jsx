import styles from "./styles.module.css";

import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import Main from "../../components/main";

function MainLayout() {
  const { role } = JSON.parse(localStorage.getItem("user")) || {};
  const { pathname } = useLocation();
  const pathRole = pathname?.split("/")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== pathRole) {
      navigate(`/${role}/dashboard`);
    }

    if (!role) {
      navigate(`/${pathRole}/login`);
    }
  }, [pathname]);

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
