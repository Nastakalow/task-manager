import styles from "./styles.module.css";

import RegisterForm from "../../components/register-form";

function AdminRegisterPageContainer() {
  return (
    <div className={styles.container}>
      <h1>Admin register</h1>
      <RegisterForm />
    </div>
  );
}

export default AdminRegisterPageContainer;
