import { UserRole } from './Enums';
import { PersonalDataBase } from '../UserPersonalData/Responses';
import { AddressResponseBase } from '../Address/Ressponses';
import { AccountResponseBase } from '../Account/Ressponses';

export interface UserResponseBase {
  email: string;
  role: UserRole;
  personalData: PersonalDataBase;

  address: AddressResponseBase;
  account: AccountResponseBase;
}

export interface WorkerIdResponseI {
  id: string;
  companyId: string;
}
