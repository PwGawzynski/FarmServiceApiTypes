import { TaskType } from './Enums';

export interface TaskResponseBase {
  id: string;
  isDone?: boolean;

  type: TaskType;

  createdAt: Date;

  openedAt?: Date;

  closedAt?: Date;

  fieldId: string;

  workerId: string;

  machineId: string;
}

export type TaskResponseCollection = Array<TaskResponseBase>;
