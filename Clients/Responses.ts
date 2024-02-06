import { UserResponseBase } from '../User/Responses';
import { CompanyResponseBase } from '../Company/Responses';

export type ClientResponseBase = {
  id: string;
  user: Pick<UserResponseBase, 'personal_data' | 'address' | 'role'>;
  company: CompanyResponseBase | undefined;
};
