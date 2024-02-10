import { CreateAddressReqI } from '../Address/Requests';

export interface CreateClientsCompanyReqI {
  name: string;
  email: string;
  NIP: string;
  phoneNumber: string;
  address: CreateAddressReqI;
}
