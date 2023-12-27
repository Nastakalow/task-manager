import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import TaskDetailContainer from "../../containers/task-detail-container";
import { fetchTaskById } from "../../services/task";

function AdminTaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    fetchTaskById(id).then((data) => setTask(data));
  }, []);

  return <TaskDetailContainer id={id} {...task} />;
}

export default AdminTaskDetailPage;
