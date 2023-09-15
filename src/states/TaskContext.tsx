import { useState, useContext } from "react";
import tasksContext from "./task";

// type of React Prop
export type reactProp = {
  children: React.ReactNode;
};

export type Task = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

// Type of Task context
export type TASKContext = {
  TASK: Task[];
  handleAddTask: (task: string) => void;
  handleToggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  deleteAll(): void;
};

const TaskContext = ({ children }: reactProp) => {
  const [TASK, setTASK] = useState<Task[]>(() => {
    const data = localStorage.getItem("tasks") || "[]";
    return JSON.parse(data);
  });

  const handleAddTask = (task: string) => {
    setTASK((prev) => {
      const newTasks: Task[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const handleToggleTask = (id: string) => {
    setTASK((prev) => {
      const newTasks = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const deleteTask = (id: string) => {
    setTASK((prev) => {
      const newTasks = prev.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const deleteAll = () => {
    setTASK([]);
    localStorage.removeItem("tasks");
  };

  return (
    <tasksContext.Provider
      value={{ TASK, handleAddTask, handleToggleTask, deleteTask, deleteAll }}>
      {children}
    </tasksContext.Provider>
  );
};

export default TaskContext;

export const useTasks = () => {
  const tasksConsumer = useContext(tasksContext);
  if (!tasksConsumer) {
    throw new Error("useTasks used outside of Provider");
  }
  return tasksConsumer;
};
