import { CreateUserReqI } from '../User/Requests';
import { CreateCompanyReqI } from '../Company/Requests';

export type CreateClientReqI = {
  user: Pick<CreateUserReqI, 'personal_data' | 'address'>;
  company?: CreateCompanyReqI;
};
