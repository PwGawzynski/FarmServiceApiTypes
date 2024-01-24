import { CreateUserReqI } from '../User/Requests';
import { CreateCompanyReqI } from '../Company/Requests';

export type CreateClientReqI = {
  user: CreateUserReqI;
  company?: CreateCompanyReqI;
};
