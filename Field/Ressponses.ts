import { FieldAddressResponseBase } from '../FiledAddress/Ressponses';

export interface FieldResponseBase {
  id: string;
  polishSystemId: string;

  area: number;

  dateOfCollectionData: Date;

  address: FieldAddressResponseBase;
}

export interface DataFromXMLRes {
  area: number;

  city: string;

  county: string;

  dateOfCollectionData: Date;

  polishSystemId: string;

  voivodeship: string;
}
