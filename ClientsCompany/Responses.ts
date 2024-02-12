import { CreateClientsCompanyReqI } from './Requests';

export type ClientsCompanyResponseBase = {
  id: string;
} & CreateClientsCompanyReqI;
