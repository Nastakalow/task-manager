import styles from "./styles.module.css";

function DashboardPageContainer() {
  const { username } = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
      <h1 className={styles.title}>Welcome {username}!</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        perspiciatis! Eveniet amet doloribus architecto illum aliquid. Sint,
        animi quis consequatur explicabo reprehenderit est facilis, quos
        recusandae possimus unde cupiditate aspernatur.
      </p>
    </>
  );
}

export default DashboardPageContainer;
