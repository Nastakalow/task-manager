import styles from "./styles.module.css";

import LoginForm from "../../components/login-form";

function LoginPageContainer({ role }) {
  return (
    <div className={styles.container}>
      <h1>{role} login</h1>
      <LoginForm role={role} />
    </div>
  );
}

export default LoginPageContainer;
