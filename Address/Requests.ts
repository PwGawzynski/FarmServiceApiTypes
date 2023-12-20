export interface CreateAddressReqI {
  county: string;
  city: string;
  voivodeship?: string;

  street?: string;

  houseNumber: string;

  postalCode: string;

  apartmentNumber?: string;
}
