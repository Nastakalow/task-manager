import styles from "./styles.module.css";

import LoginForm from "../../components/login-form";
import { Link } from "react-router-dom";

function LoginPageContainer({ role }) {
  return (
    <main className={styles.loginContainer}>
      <header className={styles.header}>
        <h2 className={styles.title}>{role} login</h2>
      </header>
      <LoginForm role={role} />

      {role === "admin" && (
        <footer className={styles.footer}>
          Don't have an account? &nbsp;
          <Link to="/admin/register" className={styles.link}>
            Register here
          </Link>
        </footer>
      )}
    </main>
  );
}

export default LoginPageContainer;
