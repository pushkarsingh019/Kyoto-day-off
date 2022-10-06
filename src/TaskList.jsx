import TaskComponent from "./TaskComponent";

function TaskList({ tasks, onDelete, onUpdate }) {
  console.log(`printing from tasklist main ->`);
  console.log(tasks);
  return (
    <section>
      {tasks.map((task) => {
        console.log(`printing from tasklist ->`);
        console.log(task);
        return (
          <TaskComponent
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          ></TaskComponent>
        );
      })}
    </section>
  );
}

export default TaskList;
