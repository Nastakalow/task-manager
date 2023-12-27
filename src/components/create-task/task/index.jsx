import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Task({ id, title, assignee, status, deadline }) {
  return (
    <Link to={id} className={styles.taskContainer}>
      <ul className={styles.contentList}>
        <li className={styles.contentItem}>{title}</li>
        <li className={styles.contentItem}>{assignee}</li>
        <li className={styles.contentItem}>
          {status ? "Completed" : "Not completed"}
        </li>
        <li className={styles.contentItem}>{deadline}</li>
      </ul>
    </Link>
  );
}

export default Task;
