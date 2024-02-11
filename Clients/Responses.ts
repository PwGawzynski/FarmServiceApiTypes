import { UserResponseBase } from '../User/Responses';
import { ClientsCompanyResponseBase } from '../ClientsCompany/Responses';

export type ClientResponseBase = {
  id: string;
  email: string;
  user: Pick<UserResponseBase, 'personal_data' | 'address' | 'role'>;
  company: ClientsCompanyResponseBase | undefined;
};
