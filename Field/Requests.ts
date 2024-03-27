import { CreateFieldAddressReqI } from '../FiledAddress/Requests';

export interface CreateFieldReqI {
  nameLabel: string;
  polishSystemId: string;

  area: number;

  dateOfCollectionData?: Date;

  address: CreateFieldAddressReqI;

  client?: string;
}

export interface updateFieldReqI {
  field: string;
  nameLabel: string;
  polishSystemId: string;

  area: number;

  dateOfCollectionData?: Date;

  address: CreateFieldAddressReqI;

  client?: string;
}
