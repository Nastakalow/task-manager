import styles from "./styles.module.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { LOGIN_FORM_FIELDS } from "./constants";
import FormInput from "../form-input";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../../services/auth";

function LoginForm({ role }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const submitLogin = async (data) => {
    console.log(data);

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

  if (loading) {
    return <div>Loading...</div>;
  }

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
