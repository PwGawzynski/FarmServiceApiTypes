import { CreateFieldAddressReqI } from '../FiledAddress/Requests';

export interface CreateFieldReqI {
  polishSystemId: string;

  area: number;

  dateOfCollectionData: Date;

  address: CreateFieldAddressReqI;

  client?: string;
}
