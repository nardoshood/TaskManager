import { createContext } from "react";
import { TASKContext } from "./taskContext";

const tasksContext = createContext<TASKContext | null>(null);

export default tasksContext;
