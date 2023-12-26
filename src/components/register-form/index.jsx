import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { REGISTER_FORM_FIELDS } from "./constants";
import FormInput from "../form-input";

import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../services/firebase-auth";
import { redirect } from "react-router-dom";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState(null);
  const [user, loading, error] = useAuthState(auth);

  const submitRegister = (data) => {
    setFormData(data);
    registerWithEmailAndPassword(data.username, data.email, data.password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) redirect("/admin/login");
  }, [user, loading]);

  return (
    <form
      onSubmit={handleSubmit(submitRegister)}
      className={styles.formContainer}
    >
      <div className={styles.fieldsWrapper}>
        {REGISTER_FORM_FIELDS.map((field) => (
          <FormInput
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Register"} />
    </form>
  );
}

export default RegisterForm;
