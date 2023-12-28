import styles from "./styles.module.css";

import RegisterForm from "../../components/register-form";
import { Link } from "react-router-dom";

function AdminRegisterPageContainer() {
  return (
    <main className={styles.registerContainer}>
      <header className={styles.header}>
        <h2 className={styles.title}>Admin Register</h2>
      </header>
      <RegisterForm />

      <footer className={styles.footer}>
        Already have an account? &nbsp;
        <Link to="/admin/login" className={styles.link}>
          Login
        </Link>
      </footer>
    </main>
  );
}

export default AdminRegisterPageContainer;
