import { TaskType } from './Enums';
import { FieldResponseBase } from '../Field/Ressponses';
import { WorkerResponseBase } from '../Worker/Responses';
import { MachineResponseBase } from '../Machine/Responses';
import { TaskSessionResponseBase } from '../TaskSession/Responses';

export interface TaskResponseBase {
  id: string;

  isDone?: boolean;

  type: TaskType;

  performanceDate: Date;

  createdAt: Date;

  lastPausedAt: Date;

  openedAt?: Date;

  closedAt?: Date;

  field: FieldResponseBase;

  worker: WorkerResponseBase;

  machine: MachineResponseBase;

  sessions: TaskSessionResponseBase[];
}

export type TaskResponseCollection = Array<TaskResponseBase>;
