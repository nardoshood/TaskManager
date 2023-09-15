import { useTasks } from "../states/TaskContext";
import { useSearchParams } from "react-router-dom";

const Tasks = () => {
  const { TASK, handleToggleTask, deleteTask, deleteAll } = useTasks();

  const [searchParams] = useSearchParams();
  const tasksData = searchParams.get("tasks");

  let filterTask = TASK;

  if (tasksData === "active") {
    filterTask = filterTask.filter((task) => !task.completed);
  }
  if (tasksData === "completed") {
    filterTask = filterTask.filter((task) => task.completed);
  }

  return (
    <>
      <ul className="main-task">
        {filterTask.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.completed}
                onChange={() => {
                  handleToggleTask(task.id);
                }}
              />
              <label htmlFor={`task-${task.id}`}> {task.task}</label>
              {task.completed && (
                <button
                  onClick={() => {
                    deleteTask(task.id);
                  }}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {filterTask.length > 0 && (
        <button id="deleteAll" onClick={deleteAll}>
          Delete All
        </button>
      )}
    </>
  );
};

export default Tasks;
