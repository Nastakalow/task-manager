import styles from "./styles.module.css";

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.loading}></p>
    </div>
  );
}

export default Loading;
