import { TaskSessionResponseBase } from '../TaskSession/Responses';
import { ActivityType } from './Enums';

export interface ActivityResponseBase {
  session: TaskSessionResponseBase;
  workerId: string;
  taskId: string;
  fieldId: string;
  workerName: string;
  workerSurname: string;
  fieldName: string;
  type: ActivityType;
}
