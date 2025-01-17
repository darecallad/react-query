import { Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";
import React from "react";

interface TaskContextTask {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const taskContext = React.createContext<TaskContextTask>({} as TaskContextTask);

export default taskContext;
