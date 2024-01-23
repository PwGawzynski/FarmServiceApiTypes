import { UserRole } from './Enums';
import { PersonalDataBase } from '../UserPersonalData/Responses';
import { AddressResponseBase } from '../Address/Ressponses';
import { AccountResponseBase } from '../Account/Ressponses';
import { CompanyResponseBase } from '../Company/Responses';

export interface UserResponseBase {
  email: string;
  role: UserRole;
  personal_data: PersonalDataBase;

  address: AddressResponseBase;
  account: AccountResponseBase;
  company: CompanyResponseBase | null;
}

export interface WorkerIdResponseI {
  id: string;
  companyId: string;
}
