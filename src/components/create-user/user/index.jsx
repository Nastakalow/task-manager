import styles from "./styles.module.css";

function User({ firstName, lastName, email }) {
  const firstLetters = `${firstName?.substring(0, 1)}${lastName?.substring(
    0,
    1
  )}`.toUpperCase();

  return (
    <div className={styles.userContainer}>
      <div className={styles.profileImg}>
        <span>{firstLetters}</span>
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{`${firstName} ${lastName}`}</h2>
        <span className={styles.email}>{email}</span>
      </div>
    </div>
  );
}

export default User;
