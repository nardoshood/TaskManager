import { createContext } from "react";
import { TASKContext } from "./TaskContext";

const tasksContext = createContext<TASKContext | null>(null);

export default tasksContext;
