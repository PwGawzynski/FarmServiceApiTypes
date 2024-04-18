import { UserResponseBase } from '../User/Responses';
import { ClientsCompanyResponseBase } from '../ClientsCompany/Responses';

export type ClientResponseBase = {
  id: string;
  email: string;
  user: Pick<UserResponseBase, 'personalData' | 'address' | 'role'>;
  company: ClientsCompanyResponseBase | undefined;
};
