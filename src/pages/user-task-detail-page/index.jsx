import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchTaskById } from "../../services/task";
import TaskDetailContainer from "../../containers/task-detail-container";

function UserTaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    fetchTaskById(id).then((data) => setTask(data));
  }, []);

  return <TaskDetailContainer id={id} {...task} />;
}

export default UserTaskDetailPage;
