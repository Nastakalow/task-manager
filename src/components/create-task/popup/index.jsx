import styles from "./styles.module.css";

import { GoXCircle } from "react-icons/go";
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

  const inputProps = {
    register,
    errors,
    styles: {
      input: styles.input,
      label: styles.label,
      errMessage: styles.errMessage,
    },
  };

  return (
    <form
      ref={nodeRef}
      onSubmit={handleSubmit(submitTask)}
      className={styles.formContainer}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Create Task</h2>
        <button onClick={() => setShowPopup(false)}>
          <GoXCircle style={{ fontSize: "32px" }} />
        </button>
      </div>
      <div className={styles.fieldsWrapper}>
        {CREATE_TASK_FORM_FIELDS.map((field, index) => (
          <div key={index} className={styles.inputWrapper}>
            <FormInput {...field} {...inputProps} />
          </div>
        ))}
      </div>
      <input className={styles.submitBtn} type="submit" value={"Create Task"} />
    </form>
  );
}

export default TaskPopup;
