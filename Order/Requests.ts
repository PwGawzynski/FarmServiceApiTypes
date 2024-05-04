export interface CreateOrderReqI {
  name: string;

  performanceDate: Date;

  additionalInfo?: string;

  client: string;
}

export interface UpdateOrder {
  order: string;
  name: string;
  additionalInfo: string;
  performanceDate: Date;
}
