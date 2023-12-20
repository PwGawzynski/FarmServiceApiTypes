import { CreatUserPersonalDataReqI } from '../UserPersonalData/Requests';
import { CreateAddressReqI } from '../Address/Requests';
import { Theme } from '../Account/Constants';

import { UserRole } from './Enums';

/**
 * Interface that specify req object when register new user call
 */
export interface CreateUserReqI {
  /**
   * This is because user can log in via nip / phone number
   */
  userLoginIdentificator?: string;
  email: string;
  userPersonalData: CreatUserPersonalDataReqI;
  addressData: CreateAddressReqI;
  accountData: {
    theme: Theme;
  };
  userRole: UserRole;
}
