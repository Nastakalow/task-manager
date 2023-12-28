import styles from "./styles.module.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { REGISTER_FORM_FIELDS } from "./constants";
import FormInput from "../form-input";

import { registerWithEmailAndPassword } from "../../services/auth";
import { addOrganization } from "../../services/organization";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const ROLE = "admin";

  const submitRegister = async (data) => {
    const organizationData = {
      name: data.organizationName,
      phoneNumber: data.phoneNumber,
      address: data.address,
    };
    const organizationId = await addOrganization(organizationData);

    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
      role: ROLE,
      organizationId,
    };
    const response = await registerWithEmailAndPassword(userData);

    if (response.status === 200) {
      navigate("/admin/login");
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

  return (
    <form
      onSubmit={handleSubmit(submitRegister)}
      className={styles.formContainer}
    >
      <div className={styles.fieldsWrapper}>
        {REGISTER_FORM_FIELDS.map((field) => (
          <div key={field.id} className={styles.inputWrapper}>
            <FormInput key={field.id} {...field} {...inputProps} />
          </div>
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Register"} />
    </form>
  );
}

export default RegisterForm;
