import styles from "./styles.module.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LOGIN_FORM_FIELDS } from "./constants";
import FormInput from "../form-input";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../../services/auth";
import Loading from "../loading";

function LoginForm({ role }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const submitLogin = async (data) => {
    const response = await logInWithEmailAndPassword(
      data.email,
      data.password,
      role
    );

    localStorage.setItem(
      "user",
      JSON.stringify({
        token: user?.accessToken,
        email: user.email,
        username: user.displayName,
        role,
        organizationId: response.organizationId,
      })
    );

    if (response.status === 200) {
      navigate(`/${role}/dashboard`);
    }
  };

  const inputProps = {
    register,
    errors,
    styles: {
      label: styles.label,
      input: styles.input,
      errMessage: styles.errMessage,
    },
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit(submitLogin)} className={styles.formContainer}>
      <div className={styles.fieldsWrapper}>
        {LOGIN_FORM_FIELDS.map((field) => (
          <div key={field.id} className={styles.inputWrapper}>
            <FormInput
              {...field}
              register={register}
              errors={errors}
              {...inputProps}
            />
          </div>
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Login"} />
    </form>
  );
}

export default LoginForm;
