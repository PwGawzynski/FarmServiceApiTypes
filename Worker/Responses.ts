import { PersonalDataBase } from '../UserPersonalData/Responses';
import { Position, Status } from './Enums';
import { AddressResponseBase } from '../Address/Ressponses';

export interface WorkerResponseBase {
  personalData: PersonalDataBase;

  address: AddressResponseBase;

  position?: Position;

  status?: Status;

  email: string;
}
export interface WorkerIdResponseBase {
  userId: string;
  workerData: WorkerResponseBase | undefined;
}
