import styles from "./styles.module.css";

function FormInput({
  id,
  label,
  type,
  placeholder,
  name,
  register,
  errors,
  validation,
}) {
  return (
    <div className={styles.groupContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && (
        <p className={styles.errMessage}>{errors[name].message}</p>
      )}
    </div>
  );
}

export default FormInput;
