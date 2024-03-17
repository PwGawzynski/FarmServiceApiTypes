import { BASE_MIN_LEN } from '../Common/Constants';

abstract class FieldAddressConstants {
  static readonly CITY_MIN_LEN = BASE_MIN_LEN;
  static readonly CITY_MAX_LEN = 70;
  static readonly COUNTY_MIN_LEN = BASE_MIN_LEN;
  static readonly COUNTY_MAX_LEN = 70;
  static readonly VOIVODESHIP_MIN_LEN = BASE_MIN_LEN;
  static readonly VOIVODESHIP_MAX_LEN = 50;
  static readonly POSTAL_CODE_LEN = 6;
  static readonly LATITUDE_MIN_LEN = BASE_MIN_LEN;
  static readonly LATITUDE_MAX_LEN = 15;
  static readonly LONGITUDE_MIN_LEN = BASE_MIN_LEN;
  static readonly LONGITUDE_MAX_LEN = 15;
}
export default FieldAddressConstants;
