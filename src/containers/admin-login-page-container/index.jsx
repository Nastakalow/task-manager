import styles from "./styles.module.css";

import LoginForm from "../../components/login-form";

function AdminLoginPageContainer() {
  return (
    <div className={styles.container}>
      <h1>Admin login</h1>
      <LoginForm />
    </div>
  );
}

export default AdminLoginPageContainer;
