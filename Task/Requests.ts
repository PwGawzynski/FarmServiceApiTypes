import { TaskType } from './Enums';

export interface CreateTaskReqI {
  order: string;
  worker: string;
  field: string;
  machine: string;
  type: TaskType;
}
export interface CreateTaskCollection {
  tasks: Array<CreateTaskReqI>;
}

export interface DeleteTaskReq {
  task: string;
}
