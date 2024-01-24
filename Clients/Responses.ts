import { UserResponseBase } from '../User/Responses';
import { CompanyResponseBase } from '../Company/Responses';

export type ClientResponseBase = {
  user: UserResponseBase;
  company: CompanyResponseBase;
};
