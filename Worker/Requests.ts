import { Position, Status } from './Enums';

export interface CreateWorkerReqI {
  user: string;
}

export interface UpdateWorkerStatusOrPositionReqI {
  worker: string;
  status?: Status;
  position?: Position;
}
