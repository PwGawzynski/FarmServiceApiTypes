import { CreateAddressReqI } from '../Address/Requests';

export interface CreateClientsCompanyReqI {
  client: string;
  name: string;
  email: string;
  NIP: string;
  phoneNumber: string;
  address: CreateAddressReqI;
}
export type UpdateClientsCompanyReqI = Partial<CreateClientsCompanyReqI> & {
  company: string;
};
