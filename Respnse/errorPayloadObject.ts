export interface ErrorPayloadObject {
  message?: string;
  code?: number;
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
