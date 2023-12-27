import styles from "./styles.module.css";

import { useForm } from "react-hook-form";

import { CREATE_TASK_FORM_FIELDS } from "./constants";
import { useOutsidePopup } from "../../../hooks/useOutsidePopup";
import FormInput from "../../form-input";

import { useDispatch } from "react-redux";
import { useRef } from "react";
import { createTask } from "../../../features/task/taskSlice";

function TaskPopup({ setShowPopup }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nodeRef = useRef(null);
  const { username, organizationId } = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const submitTask = async (data) => {
    const taskData = {
      ...data,
      status: false,
      assignee: username,
      organizationId,
    };

    await dispatch(createTask(taskData));
    setShowPopup(false);
  };

  useOutsidePopup(nodeRef, () => {
    setShowPopup(false);
  });

  return (
    <form
      ref={nodeRef}
      onSubmit={handleSubmit(submitTask)}
      className={styles.formContainer}
    >
      <div className={styles.fieldsWrapper}>
        {CREATE_TASK_FORM_FIELDS.map((field) => (
          <FormInput
            key={field.id}
            {...field}
            register={register}
            errors={errors}
          />
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Create Task"} />
    </form>
  );
}

export default TaskPopup;
