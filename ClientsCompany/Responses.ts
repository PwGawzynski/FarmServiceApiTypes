import { CreateClientsCompanyReqI } from './Requests';

export type ClientsCompanyResponseBase = {
  id: string;
  client: ClientsCompanyResponseBase;
} & CreateClientsCompanyReqI;
