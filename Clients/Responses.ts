import { UserResponseBase } from '../User/Responses';
import { CompanyResponseBase } from '../Company/Responses';

export type ClientResponseBase = {
  user: Pick<UserResponseBase, 'personal_data' | 'address' | 'role'>;
  company: CompanyResponseBase;
};
