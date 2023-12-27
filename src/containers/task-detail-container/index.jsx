import styles from "./styles.module.css";

import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../components/form-input";
import { updateTask } from "../../services/task";

function TaskDetailContainer({
  id,
  title,
  description,
  deadline,
  status,
  assignee,
}) {
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
      name: "title",
      type: "text",
      value: title,
    },
    {
      name: "description",
      type: "text",
      value: description,
    },
    {
      name: "deadline",
      type: "date",
      value: deadline,
    },
    {
      name: "status",
      type: "checkbox",
      value: status,
    },
  ];

  return (
    <>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      <form onSubmit={handleSubmit(submitLogin)}>
        {inputFields.map((field, index) => (
          <FormInput
            key={index}
            {...field}
            register={register}
            errors={errors}
            disabled={!isEditing}
          />
        ))}
        {isEditing && <input type="submit" value={"change"} />}
      </form>
    </>
  );
}

export default TaskDetailContainer;
