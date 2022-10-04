import TaskComponent from "./TaskComponent";

function TaskList({ tasks, onChange }) {
  return (
    <section>
      {tasks.map((task) => {
        return (
          <TaskComponent
            key={task.id}
            id={task.id}
            task={task.task}
            taskId={onChange}
          ></TaskComponent>
        );
      })}
    </section>
  );
}

export default TaskList;
