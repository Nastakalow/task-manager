import styles from "./styles.module.css";

import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../components/form-input";
import { updateTask } from "../../services/task";

function TaskDetailContainer({ id, title, description, deadline, status }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  const submitLogin = async (data) => {
    const status = typeof data.status === "string" ? true : false;
    const newData = {};
    for (const key in data) {
      if (data.hasOwnProperty(key) && data[key] !== undefined) {
        newData[key] = data[key];
      }
    }

    await updateTask(id, { ...newData, status });
    setIsEditing(false);
  };

  const inputFields = [
    {
      id: "title",
      name: "title",
      label: "Title",
      type: "text",
      value: title,
    },
    {
      id: "description",
      name: "description",
      label: "Description",
      type: "text",
      value: description,
    },
    {
      id: "deadline",
      name: "deadline",
      label: "Deadline",
      type: "date",
      value: deadline,
    },
    {
      id: "status",
      name: "status",
      label: "Done",
      type: "checkbox",
      value: status,
    },
  ];

  const inputProps = {
    register,
    errors,
    disabled: !isEditing,
    styles: {
      input: styles.input,
      label: styles.label,
      errMessage: styles.errMessage,
    },
  };

  return (
    <>
      <button
        className={styles.editBtn}
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <form onSubmit={handleSubmit(submitLogin)} className={styles.taskWrapper}>
        {inputFields.map((field, index) => (
          <div key={index}>
            <FormInput {...field} {...inputProps} />
          </div>
        ))}
        {isEditing && (
          <input className={styles.submitBtn} type="submit" value={"Change"} />
        )}
      </form>
    </>
  );
}

export default TaskDetailContainer;
