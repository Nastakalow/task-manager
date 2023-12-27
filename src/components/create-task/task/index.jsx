import styles from "./styles.module.css";

function Task({ title }) {
  return <div className={styles.taskContainer}>{title}</div>;
}

export default Task;
