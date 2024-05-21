export interface ErrorPayloadObject {
  message?: string;
  code: ErrorCodes;
}

export enum ErrorCodes {
  DefaultHttpException = 0,

  AlreadyExist,

  UnknownServerError,

  EntityNotExist,

  CauserUnauthorised,

  BadData,

  AccountNotActiveOrNotExist,
}
