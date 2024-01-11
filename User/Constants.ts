import { BASE_MIN_LEN } from '../Common/Constants';

export class LoginUserConstants {
  static readonly EMAIL_MIN_LEN = BASE_MIN_LEN;
  static readonly EMAIL_MAX_LEN = 350;
  static readonly PASSWORD_MIN_LEN = 8;
  static readonly PASSWORD_MAX_LEN = 200;
}
