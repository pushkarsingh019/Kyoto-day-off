import { useState } from "react";

function TaskComponent({ task, onUpdate, onDelete }) {
  console.log(task);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task.task);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <section>
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => {
            setUpdatedTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let updatedObject = { ...task, task: updatedTask };
            onUpdate(updatedObject, task.id);
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </section>
    );
  } else {
    taskContent = (
      <div>
        <span>{task.task}</span>
        <span
          onClick={() => {
            setIsEditing(true);
          }}
          className="options"
        >
          Edit
        </span>
        <span onClick={() => onDelete(task.id, "delete")} className="options">
          Delete
        </span>
      </div>
    );
  }

  return <section>{taskContent}</section>;
}

export default TaskComponent;
