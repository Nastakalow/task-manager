import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

function Task({ id, title, assignee, status, deadline }) {
  const modifierDate = new Date(deadline);
  const timeAgo = formatDistanceToNow(modifierDate, { addSuffix: true });

  return (
    <Link to={id} className={styles.taskContainer}>
      <ul className={styles.contentList}>
        <li className={styles.contentItem}>{title}</li>
        <li className={styles.contentItem}>{assignee}</li>
        <li className={styles.contentItem}>
          {status ? "Completed" : "Not completed"}
        </li>
        <li className={styles.contentItem}>{timeAgo}</li>
      </ul>
    </Link>
  );
}

export default Task;
