import { createContext } from "react";
import { TaskContext } from "./taskContext";

const taskContext = createContext<TaskContext | null>(null);

export default taskContext;
