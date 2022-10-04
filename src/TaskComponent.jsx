import { useState } from "react";

function TaskComponent({ task, taskId, id }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <span>{task}</span>
      <span onClick={() => taskId(id, "edit")} className="options">
        Edit
      </span>
      <span onClick={() => taskId(id, "delete")} className="options">
        Delete
      </span>
    </div>
  );
}

export default TaskComponent;
