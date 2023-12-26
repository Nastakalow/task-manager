import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { redirect } from "react-router-dom";

import { LOGIN_FORM_FIELDS } from "./constants";
import FormInput from "../form-input";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../../services/firebase-auth";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, loading, error] = useAuthState(auth);

  const submitLogin = (data) => {
    logInWithEmailAndPassword(data.email, data.password);
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) redirect("/dashboard");
  }, [user, loading]);

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
