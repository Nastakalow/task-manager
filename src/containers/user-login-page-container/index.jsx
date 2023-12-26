import styles from "./styles.module.css";

import LoginForm from "../../components/login-form";

function UserLoginPageContainer() {
  return (
    <div className={styles.container}>
      <h1>User login</h1>
      <LoginForm />
    </div>
  );
}

export default UserLoginPageContainer;
