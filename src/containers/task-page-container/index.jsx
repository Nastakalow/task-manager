import styles from "./styles.module.css";

import { useEffect, useState } from "react";

import Task from "../../components/create-task/task";
import TaskPopup from "../../components/create-task/popup";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../features/task/taskSlice";

function TaskPageContainer() {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const { organizationId } = JSON.parse(localStorage.getItem("user")) || {};
  const { tasks } = useSelector((state) => state.tasks);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    dispatch(getTasks(organizationId));
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={handleShowPopup} className={styles.createBtn}>
        Create Task
      </button>
      {showPopup && (
        <div className={styles.popupContainer}>
          <TaskPopup setShowPopup={setShowPopup} />
        </div>
      )}
      <div className={styles.tasksWrapper}>
        {tasks?.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default TaskPageContainer;
