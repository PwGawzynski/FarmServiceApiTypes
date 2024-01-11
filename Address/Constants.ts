import { BASE_MIN_LEN } from '../Common/Constants';

abstract class AddressConstants {
  static readonly CITY_MIN_LEN = BASE_MIN_LEN;

  static readonly CITY_MAX_LEN = 70;

  static readonly COUNTY_MIN_LEN = BASE_MIN_LEN;

  static readonly COUNTY_MAX_LEN = 50;

  static readonly VOIVODESHIP_MIN_LEN = BASE_MIN_LEN;

  static readonly VOIVODESHIP_MAX_LEN = 50;

  static readonly STREET_MIN_LEN = BASE_MIN_LEN;

  static readonly STREET_MAX_LEN = 100;

  static readonly HOUSE_NR_MIN_LEN = BASE_MIN_LEN;

  static readonly HOUSE_NR_MAX_LEN = 20;

  static readonly APARTMENT_NR_MIN_LEN = BASE_MIN_LEN;

  static readonly APARTMENT_NR_MAX_LEN = 20;

  static readonly POSTAL_CODE_LEN = 6;
}

export default AddressConstants;
