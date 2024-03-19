import { CreateFieldAddressReqI } from '../FiledAddress/Requests';

export interface CreateFieldReqI {
  nameLabel: string;
  polishSystemId: string;

  area: number;

  dateOfCollectionData: Date;

  address: CreateFieldAddressReqI;

  client?: string;
}
