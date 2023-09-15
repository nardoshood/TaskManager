import { useState } from "react";
import { useTasks } from "../store/TaskContext";

const AddTask = () => {
  const { handleAddTask } = useTasks();
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New Task"
        className=" px-3 py-2 bg-white dark:bg-slate-700 dark:text-slate-200 dark:border-slate-500 border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block w-full rounded-tl-lg rounded-bl-lg sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
        type="text"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
