import styles from "./styles.module.css";

function User({ firstName, lastName, email }) {
  return (
    <div className={styles.userContainer}>
      <ul className={styles.list}>
        <li>{firstName}</li>
        <li>{lastName}</li>
        <li>{email}</li>
      </ul>
    </div>
  );
}

export default User;
