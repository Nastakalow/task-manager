function FormInput({
  id,
  label,
  type,
  value,
  disabled,
  placeholder,
  name,
  register,
  errors,
  validation,
  styles,
}) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        {...register(name, validation)}
      />
      {errors[name] && (
        <p className={styles.errMessage}>{errors[name].message}</p>
      )}
    </>
  );
}

export default FormInput;
