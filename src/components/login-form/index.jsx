import styles from "./styles.module.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LOGIN_FORM_FIELDS } from "./constants";
import FormInput from "../form-input";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../../services/auth";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const submitLogin = async (data) => {
    const response = await logInWithEmailAndPassword(data.email, data.password);
    localStorage.setItem(
      "user",
      JSON.stringify({ token: user.accessToken, email: user.email })
    );

    if (response.status === 200) {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)} className={styles.formContainer}>
      <div className={styles.fieldsWrapper}>
        {LOGIN_FORM_FIELDS.map((field) => (
          <FormInput
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Login"} />
    </form>
  );
}

export default LoginForm;
