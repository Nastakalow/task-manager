import styles from "./styles.module.css";

import LoginForm from "../../components/login-form";

function UserLoginPageContainer() {
  const ROLE = "user";

  return (
    <div className={styles.container}>
      <h1>User login</h1>
      <LoginForm role={ROLE} />
    </div>
  );
}

export default UserLoginPageContainer;
