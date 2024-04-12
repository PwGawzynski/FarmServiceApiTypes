import { TaskType } from './Enums';

export interface CreateTaskBase {
  order: string;
  worker: string;
  field: string;

  type: TaskType;
}
export interface CreateTaskCollection {
  tasks: Array<CreateTaskBase>;
}

export interface DeleteTaskReq {
  task: string;
}
