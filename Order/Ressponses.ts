import { OrderStatus } from './Enums';

export interface OrderResponseBase {
  id: string;
  clientId: string;
  name: string;

  status: OrderStatus;

  performanceDate: Date;

  createdAt?: Date;

  openedAt?: Date;

  additionalInfo: string;

  pricePerUnit?: number;
}
