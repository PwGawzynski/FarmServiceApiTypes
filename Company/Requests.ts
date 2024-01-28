import { CreateAddressReqI } from '../Address/Requests';

export interface CreateCompanyReqI {
  name: string;
  email: string;
  NIP: string;
  phoneNumber: string;
  address: CreateAddressReqI;
}
