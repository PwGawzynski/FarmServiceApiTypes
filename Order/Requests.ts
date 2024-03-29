export interface CreateOrderReqI {
  name: string;

  performanceDate: Date;

  additionalInfo: string;

  client: string;
}

export interface UpdateOrderSetPricePerUnit extends Partial<CreateOrderReqI> {
  order: string;
  pricePerUnit: number;
}
