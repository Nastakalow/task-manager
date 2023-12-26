import styles from "./styles.module.css";

import LoginForm from "../../components/login-form";

function AdminLoginPageContainer() {
  const ROLE = "admin";

  return (
    <div className={styles.container}>
      <h1>Admin login</h1>
      <LoginForm role={ROLE} />
    </div>
  );
}

export default AdminLoginPageContainer;
