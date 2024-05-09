import { OrderStatus } from './Enums';
import { TaskType } from '../Task/Enums';
import { OrderPriceResponseBase } from '../OrderPricing/Responses';

export interface OrderResponseBase {
  id: string;
  clientId: string;
  name: string;

  status: OrderStatus;

  performanceDate: Date;

  createdAt?: Date;

  openedAt?: Date;

  additionalInfo: string;

  totalArea?: string;

  pricing?: OrderPriceResponseBase | undefined;
}
