import { BASE_MIN_LEN } from '../Common/Constants';

abstract class FieldConstants {
  static readonly AREA_MAX_DECIMAL_PLACES = 5;
  static readonly AREA_MIN_VALUE = 0.00001;
  static readonly AREA_MAX_VALUE = 99999.99999;
  static readonly POLISH_ID_MIN_LEN = BASE_MIN_LEN;
  static readonly POLISH_ID_MAX_LEN = 40;
  static readonly NAME_MIN_LEN = BASE_MIN_LEN;
  static readonly NAME_MAX_LEN = 100;
}
export default FieldConstants;
