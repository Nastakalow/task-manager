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
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)} className={styles.formContainer}>
      <div className={styles.fieldsWrapper}>
        {CREATE_USER_FORM_FIELDS.map((field) => (
          <FormInput
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Create user"} />
    </form>
  );
}

export default CreateUserForm;
