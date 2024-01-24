import { PersonalDataBase } from '../UserPersonalData/Responses';
import { Position, Status } from './Enums';
import { AddressResponseBase } from '../Address/Ressponses';

export interface WorkerResponseBase {
  id: string;
  personalData: PersonalDataBase;

  address: AddressResponseBase;

  position?: Position;

  status?: Status;

  email: string;
}
