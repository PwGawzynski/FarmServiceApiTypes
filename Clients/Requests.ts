import { CreateUserReqI } from '../User/Requests';
import { CreateCompanyReqI } from '../Company/Requests';

export type CreateClientReqI = {
  user: Pick<CreateUserReqI, 'personal_data' | 'address' | 'email'>;
  company?: CreateCompanyReqI;
};

export type UpdateClientReqI = CreateClientReqI['user'] & {
  client: string;
};
