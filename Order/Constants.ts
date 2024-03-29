import { BASE_MIN_LEN } from '../Common/Constants';

abstract class OrderConstants {
  static readonly NAME_MIN_LEN = BASE_MIN_LEN;
  static readonly NAME_MAX_LEN = 50;
  static readonly ADDITIONAL_INFO_MIN_LEN = 0;
  static readonly ADDITIONAL_INFO_MAX_LEN = 10000;
  static readonly MIN_PRICE_PER_UNIT_SCALE = 2;
  static readonly MIN_PRICE_PER_UNIT = BASE_MIN_LEN;
  static readonly MAX_PRICE_PER_UNIT = 1000000;
}

export default OrderConstants;
