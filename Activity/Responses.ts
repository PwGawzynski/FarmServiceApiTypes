import { TaskSessionResponseBase } from '../TaskSession/Responses';

export interface ActivityResponseBase {
  session: TaskSessionResponseBase;
  workerId: string;
  taskId: string;
  fieldId: string;
  workerName: string;
  workerSurname: string;
  fieldName: string;
}
