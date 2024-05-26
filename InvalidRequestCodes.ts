export enum InvalidRequestCodes {
  account_emailTaken = 1,
  personalData_phoneTaken,
  machine_licencePlateTaken,
  machine_doesNotBelongToCompany,
  client_userNotCreated,
  account_badOperationOnAccount,
  account_passwordsDoNotMatch,
  account_badActivationCode,
  user_userAlreadyExist,
  account_emailRequired,
  personalData_notFound,
  address_notFound,
  order_notFound,
  order_unclosedTasks,
  order_idRequired,
  order_clientNotInCompany,
  order_notInCompany,
  orderPricing_priceTooLow,
  orderPricing_taxOutOfRange,
  task_notFound,
  task_taskAlreadyExist,
  task_workerNotInCompany,
  task_fieldNotInCompany,
  task_notInCompany,
  task_workerLocationRequired,
  task_taskNotOpened,
  order_invalidStatus,
  task_taskAlreadyStarted,
  task_orderNotInCompany,
  taskSession_anotherTaskOpened,
  taskSession_notFound,
  worker_alreadyExist,
  worker_infoTimeout,
  field_noClientData,
  field_clientNotExist,
  field_fieldNotExist,
  company_alreadyExists,
  company_emailTaken,
  company_nameTaken,
  company_phoneTaken,
  company_NIPTaken,
  unauthorized,
  account_notActivated,
  invalidToken,
}
