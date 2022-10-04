import { useState } from "react";

function NewTask({ newTaskName }) {
  const [task, setTask] = useState("");

  function formHandler(event) {
    event.preventDefault();
    newTaskName(task);
    setTask("");
  }

  return (
    <form onSubmit={formHandler}>
      <input
        required
        value={task}
        placeholder="type the new task"
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTask;
