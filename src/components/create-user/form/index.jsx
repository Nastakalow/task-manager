import styles from "./styles.module.css";

import { useForm } from "react-hook-form";

import { CREATE_USER_FORM_FIELDS } from "./constants";
import FormInput from "../../form-input";

import { createUser } from "../../../features/user/userSlice";
import { useDispatch } from "react-redux";

function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const submitLogin = async (data) => {
    const { organizationId } = JSON.parse(localStorage.getItem("user"));

    const userData = {
      ...data,
      role: "user",
      organizationId,
    };

    dispatch(createUser(userData));
    reset();
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

  return (
    <form onSubmit={handleSubmit(submitLogin)} className={styles.formContainer}>
      <h3 className={styles.title}>User Data</h3>
      <div className={styles.fieldsWrapper}>
        {CREATE_USER_FORM_FIELDS.map((field) => (
          <div key={field.id} className={styles.inputWrapper}>
            <FormInput key={field.id} {...field} {...inputProps} />
          </div>
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Create user"} />
    </form>
  );
}

export default CreateUserForm;
