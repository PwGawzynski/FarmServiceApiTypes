import { UserRole } from './Enums';
import { PersonalDataBase } from '../UserPersonalData/Responses';
import { AddressResponseBase } from '../Address/Ressponses';

/**
 * Interface that specify req object when register new user call
 */
export interface CreateUserReqI {
  email: string;
  password: string;
  role: UserRole;
  personalData: PersonalDataBase;
  address: AddressResponseBase;
}

export type UserResetPasswordReqI = Pick<CreateUserReqI, 'email'>;
