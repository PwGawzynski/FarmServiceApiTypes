export interface LoginUser {
  login: string;
  password: string;
}

export interface IdentityAuthTokenLoginRaw {
  access_token: string;
  refresh_token: string;
}

export interface IdentityAuthTokenLoginStored
  extends IdentityAuthTokenLoginRaw {
  last_updated_access_token_at: Date;

  last_updated_refresh_token_at: Date;
}
