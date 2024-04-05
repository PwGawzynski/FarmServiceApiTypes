export interface CreateOrderReqI {
  name: string;

  performanceDate: Date;

  additionalInfo?: string;

  client: string;
}

export interface UpdateOrderSetPricePerUnit extends Partial<CreateOrderReqI> {
  order: string;
  pricePerUnit: number;
}

export interface UpdateOrder {
  order: string;
  name: string;
  additionalInfo: string;
  performanceDate: Date;
  pricePerUnit: number;
}
