import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Task from "../../components/create-task/task";
import TaskPopup from "../../components/create-task/popup";
import TaskTopbar from "../../components/create-task/topbar";

import { getTasks } from "../../features/task/taskSlice";
import Loading from "../../components/loading";

function TaskPageContainer() {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const { organizationId } = JSON.parse(localStorage.getItem("user")) || {};
  const { tasks, loading } = useSelector((state) => state.tasks);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    dispatch(getTasks(organizationId));
  }, []);

  if (loading) {
    return <Loading />;
  }

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
        <TaskTopbar />
        {tasks?.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </div>
    </div>
  );
}

export default TaskPageContainer;
