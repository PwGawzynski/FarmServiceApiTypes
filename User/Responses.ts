import { UserRole } from './Enums';

export interface UserResponseBase {
  email: string;
  role: UserRole;
  personalDataId: string;

  addressId: string;
  accountId: string;
}

export interface WorkerIdResponseI {
  id: string;
  companyId: string;
}
