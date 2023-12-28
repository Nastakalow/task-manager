import styles from "./styles.module.css";

function Topbar() {
  return (
    <div className={styles.topbarContainer}>
      <ul className={styles.contentList}>
        <li className={styles.contentItem}>Title</li>
        <li className={styles.contentItem}>Assignee</li>
        <li className={styles.contentItem}>Status</li>
        <li className={styles.contentItem}>Deadline</li>
      </ul>
    </div>
  );
}

export default Topbar;
